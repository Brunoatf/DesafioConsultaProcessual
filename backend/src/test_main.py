import json

import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


@pytest.fixture(scope="session")
def lawsuit_data():
    with open("../data/lawsuits.json") as f:
        data = json.load(f)
    return data


def test_api_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Bem-vindo a API de processos judiciais."}


def test_graphql_query_all_lawsuits(lawsuit_data):
    query = """
    query {
        lawsuit {
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {
                movementDate
                description
            }
        }
    }
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == lawsuit_data


def test_graphql_query_by_cnj(lawsuit_data):
    cnj = "1008126-92.2015.8.26.0132"
    query = f"""
    query {{
        lawsuit(cnj: "{cnj}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    expected = [l for l in lawsuit_data if l["cnj"] == cnj]
    assert lawsuits == expected


def test_graphql_query_by_court(lawsuit_data):
    court = "TJSP"
    query = f"""
    query {{
        lawsuit(court: "{court}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    expected = [l for l in lawsuit_data if l["court"] == court]
    assert lawsuits == expected


def test_graphql_query_by_date_range(lawsuit_data):
    start_date = "2023-01-01"
    end_date = "2023-12-31"
    query = f"""
    query {{
        lawsuit(startDateInterval: "{start_date}", endDateInterval: "{end_date}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    expected = [l for l in lawsuit_data if start_date <= l["startDate"] <= end_date]
    assert lawsuits == expected


def test_graphql_query_by_plaintiff(lawsuit_data):
    plaintiff = "Nelson Wilians & Advogados Associados"
    query = f"""
    query {{
        lawsuit(plaintiff: "{plaintiff}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    expected = [l for l in lawsuit_data if l["plaintiff"] == plaintiff]
    assert lawsuits == expected


def test_graphql_query_by_defendant(lawsuit_data):
    defendant = "Construnelli IN Works Construtora e Incorporadora"
    query = f"""
    query {{
        lawsuit(defendant: "{defendant}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    expected = [l for l in lawsuit_data if l["defendant"] == defendant]
    assert lawsuits == expected


def test_graphql_query_combined_filters(lawsuit_data):
    court = "TJSP"
    plaintiff = "Nelson Wilians & Advogados Associados"
    query = f"""
    query {{
        lawsuit(court: "{court}", plaintiff: "{plaintiff}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    expected = [
        l for l in lawsuit_data if l["court"] == court and l["plaintiff"] == plaintiff
    ]
    assert lawsuits == expected


def test_graphql_query_nonexistent_cnj():
    cnj = "9999999-99.9999.9.99.9999"
    query = f"""
    query {{
        lawsuit(cnj: "{cnj}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == []


def test_graphql_query_nonexistent_court():
    court = "NONEXISTENT_COURT"
    query = f"""
    query {{
        lawsuit(court: "{court}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == []


def test_graphql_query_date_range_no_results():
    start_date = "1900-01-01"
    end_date = "1900-12-31"
    query = f"""
    query {{
        lawsuit(startDateInterval: "{start_date}", endDateInterval: "{end_date}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == []


def test_graphql_query_nonexistent_plaintiff():
    plaintiff = "Nonexistent Plaintiff"
    query = f"""
    query {{
        lawsuit(plaintiff: "{plaintiff}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == []


def test_graphql_query_nonexistent_defendant():
    defendant = "Nonexistent Defendant"
    query = f"""
    query {{
        lawsuit(defendant: "{defendant}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == []


def test_graphql_query_combined_filters_no_results():
    court = "TJSP"
    plaintiff = "Nonexistent Plaintiff"
    query = f"""
    query {{
        lawsuit(court: "{court}", plaintiff: "{plaintiff}") {{
            cnj
            court
            startDate
            plaintiff
            defendant
            movements {{
                movementDate
                description
            }}
        }}
    }}
    """
    response = client.post("/graphql", json={"query": query})
    assert response.status_code == 200

    lawsuits = response.json()["data"]["lawsuit"]
    assert lawsuits == []
