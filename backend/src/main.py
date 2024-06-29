from fastapi import FastAPI
from schemas import schema
from strawberry.fastapi import GraphQLRouter

graphql_app = GraphQLRouter(schema)

app = FastAPI()


@app.get("/")
async def index():
    return {"message": "Bem-vindo a API de processos judiciais."}


app.include_router(graphql_app, prefix="/graphql")
