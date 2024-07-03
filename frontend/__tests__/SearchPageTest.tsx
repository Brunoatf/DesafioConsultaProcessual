/* eslint-disable react/display-name */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPage from "../src/app/searchPage/page";
import { useSearchContext } from "../src/app/contexts/SearchContext";
import dayjs from "dayjs";

jest.mock("../src/app/contexts/SearchContext", () => ({
  useSearchContext: jest.fn(),
}));

jest.mock("../src/app/components/SearchMenu", () => () => (
  <div data-testid="search-menu">Search Menu Component</div>
));

describe("SearchPage", () => {
  it("renders the SearchPage component without search results", () => {
    // Mock the context to return initial state
    (useSearchContext as jest.Mock).mockReturnValue({
      returnedData: [],
      hasSearched: false,
    });

    render(<SearchPage />);

    // Check if the SearchMenu component is rendered
    expect(screen.getByTestId("search-menu")).toBeInTheDocument();

    // Check if the initial text is rendered
    expect(screen.getByText(/consulta processual/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /pesquise por cnj, tribunal, partes ou intervalo de datas/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the SearchPage component with no results after search", () => {
    // Mock the context to return state with search but no results
    (useSearchContext as jest.Mock).mockReturnValue({
      returnedData: [],
      hasSearched: true,
    });

    render(<SearchPage />);

    // Check if the "no results" message is rendered
    expect(
      screen.getByText(/sua consulta não gerou resultados/i),
    ).toBeInTheDocument();
  });

  it("renders the SearchPage component with search results", () => {
    // Mock the context to return state with search results
    (useSearchContext as jest.Mock).mockReturnValue({
      returnedData: [
        {
          cnj: "1234567-89.2021.8.26.0000",
          court: "TJSP",
          startDate: dayjs("2021-01-04"),
          plaintiff: "John Doe",
          defendant: "Jane Doe",
          movements: [
            {
              movementDate: dayjs("2021-01-05"),
              description: "Initial filing",
            },
          ],
        },
      ],
      hasSearched: true,
    });

    render(<SearchPage />);

    // Check if the search results are rendered
    expect(
      screen.getByText(/mostrando 1 resultados para a sua consulta/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/processo n. 1234567-89.2021.8.26.0000/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/data de início/i)).toBeInTheDocument();
    expect(screen.getByText(/04\/01\/2021/i)).toBeInTheDocument();
    const courtElements = screen.getAllByText(/tribunal/i);
    expect(courtElements[1]).toBeInTheDocument();
    expect(screen.getByText(/tjsp/i)).toBeInTheDocument();
    expect(screen.getByText(/autor/i)).toBeInTheDocument();
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/réu/i)).toBeInTheDocument();
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
    expect(screen.getByText(/movimentações/i)).toBeInTheDocument();
    expect(screen.getByText(/initial filing/i)).toBeInTheDocument();
    expect(screen.getByText(/05\/01\/2021/i)).toBeInTheDocument();
  });
});
