# Desafio de Consulta Processual

![Print1](/printLandingPage.png)

![Print2](/printSearchPage.png)

Este é meu projeto para o desafio de consulta processual da Jusbrasil.

Informações detalhadas sobre a implementação podem ser encontradas no arquivo `COMMENTS.md`, enquanto aqui tem-se apenas as instruções para execução e documentação da estrutura do projeto.

Para melhor utilizar a aplicação, recomenda-se verificar primeiro o arquivo `backend/data/lawsuits.json` para verificar quais processos estão disponíveis para consulta.

Uma maneira rápida de testar é pesquisar primeiro por tribunal, como `TJSP`, `TJMG` ou `TJRJ` e, em seguida, ir refinando os filtros de acordo com os resultados retornados.

## Execução do projeto

### Com Docker Compose (recomendado):

1 - Clone este repositório para sua máquina

2 - Certifique-se que sua máquina possui [Docker](https://www.docker.com/) instalado. Se não, utilize a documentação oficial para instalar.

3 - Abra o terminal na pasta raiz do projeto e execute `docker compose up`

4 - A aplicação poderá ser utilizada a partir de `localhost:3000`

### Sem Docker

#### Back-end

1 - Instale o [Poetry](https://python-poetry.org/), caso não possua

2 - Vá para o diretório `backend`, executando  `cd backend`

2 - Execute `poetry install` para instalar as dependências em um novo ambiente virtual

3 - Execute `poetry shell` para ativar o ambiente virtual do projeto

4 - Execute `fastapi run src/main.py` para rodar a aplicação

5 - Acesse a aplicação em `localhost:8000`, sendo possível realizar testes com GraphQL pela interface gráfica do Strawberry em `localhost:8000/graphql`

#### Front-end

1 - Para o funcionamento correto do front-end, garanta que o back-end já está rodando em `localhost:8000`

2 - Instale o [Next.js](https://nextjs.org/), caso não possua

3 - Vá para o diretório `frontend`, executando `cd frontend`

4 - Instale as dependências com `npm install`

5 - Execute a aplicação com `npm run dev`

6 - Acesse a aplicação em `localhost:3000`

## Estrutura do projeto

O projeto é dividido em 2 aplicações, o front-end e o back-end, cada uma implementada em seu respectivo diretório.

O esquema abaixo representa os principais arquivos do código-fonte do sistema. Recomenda-se estar familiarizado com eles antes de contribuir com o projeto.

- frontend
  - src
    - app
      - components
        - `About.tsx` : seção sobre da página inicial
        - `CustomAppBar.tsx` : barra de menu superior
        - `Footer.tsx` : rodapé do site
        - `Hero.tsx` : hero da página inicial
        - `SearchMenu.tsx` : formulário de consulta de processos
        - `ToggleColorMode.tsx` : botão de mudança de tema entre claro e escuro
      - contexts
        - `SearchContext.tsx` : contexto formado pelos estados usados para a consulta processual
      - searchPage
        - `page.tsx` : página de pesquisa
      - `layout.tsx` : layout que engloba as páginas
      - `page.tsx` : página principal
  - \_\_tests\_\_
    - `LandingPageTest.tsx` : testes para a página principal
    - `SearchPageTest.tsx` : testes para a página de pesquisa
- backend
  - data
    - `lawsuits.json` : base de dados simulada composta por processos fictícios
  - src
    - `database.py` : encapsula a lógica de acesso aos dados
    - `main.py` : definições principais da API
    - `schemas.py` : definição dos schemas GraphQL utilizados
  - tests
    - `test_main.py` : conjunto de testes para o backend
