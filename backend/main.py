
from fastapi.responses import JSONResponse
import json
import strawberry

from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
from schemas import schema

graphql_app = GraphQLRouter(schema)

app = FastAPI()

app.include_router(graphql_app, prefix="/graphql")