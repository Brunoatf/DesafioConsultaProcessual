FROM python:3.12-slim

WORKDIR /app

COPY . /app/

RUN pip install poetry

RUN poetry install --no-root --no-dev

EXPOSE 8000

CMD ["poetry", "run", "fastapi", "run", "src/main.py", "--port", "8000"]
