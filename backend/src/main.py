from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import schema
from strawberry.fastapi import GraphQLRouter

graphql_app = GraphQLRouter(schema)

app = FastAPI()


@app.get("/")
async def index():
    return {"message": "Bem-vindo a API de processos judiciais."}


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # permitir o acesso do frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(graphql_app, prefix="/graphql")
