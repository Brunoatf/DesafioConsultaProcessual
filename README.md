# Desafio de Consulta Processual

Este é meu projeto para o desafio de consulta processual da Jusbrasil.

Informações detalhadas sobre a implementação podem ser encontradas no arquivo `COMMENTS.md`, enquanto aqui tem-se apenas as instruções para execução e documentação da estrutura do projeto.

## Execução do projeto

1 - Clone este repositório para sua máquina

2 - Certifique-se que sua máquina possui [Docker]() instalado. Se não, utilize a documentação oficial para instalar.

3 - Abra o terminal na pasta raiz do projeto e execute `docker compose up`

4 - A aplicação poderá ser utilizada em `localhost:3000`

Para melhor utilizar a aplicação, recomenda-se verificar primeiro o arquivo `backend/data/lawsuits.json` para verificar quais processos estão disponíveis para consulta.

Uma maneira rápida de testar é pesquisar primeiro por tribunal, como `TJSP`, `TJMG` ou `TJRJ` e, em seguida, ir refinando os filtros de acordo com os resultados retornados.

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
- backend
  - data
    - `lawsuits.json` : base de dados simulada composta por processos fictícios
  - src
    - `database.py` : encapsula a lógica de acesso aos dados
    - `main.py` : definições principais da API
    - `schemas.py` : definição dos schemas GraphQL utilizados
  - tests
    - `test_main.py` : conjunto de testes para o backend
