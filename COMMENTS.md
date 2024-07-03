# Comentários sobre a implementação do projeto

Organizei o repositório em 2 principais diretórios - `backend`e `frontend` - cada um contendo as aplicações isoladas para o Front-end e o Back-end do projeto. Cada uma dessas aplicações pode ser executada em um container Docker segundo os arquivos `Dockerfile` presentes nos diretórios. Já o arquivo `compose.yml` na raíz do projeto permite que as aplicações sejam executadas em conjunto.

Alguns arquivos, como `.pre-commit-config.yaml` e `.flake8` precisaram ser movidos para a raíz do projeto por necessidade das ferramentas que os utilizam, ainda que, na prática, só sejam usados pelo back-end.

Busquei implementar o projeto de modo similar ao que faria em um cenário de trabalho real. Contudo, tomei liberdade para fazer as seguintes simplificações:

- Por razões de praticidade, optei por versionar o código em apenas 1 branch. Considerei essa opção razoável por estar trabalhando sozinho e, principalmente, por conta do tamanho reduzido do projeto. Em um cenário real, eu utilizaria a branch **main** apenas para releases, tomando uma outra branch **staging** para a realização de testes e integração das features - cada uma vindo a partir de branches específicas.

- Pela ausência de um ambiente de produção, não configurei pipelines de CI/CD para a realização de testes e deploys automatizados. Contudo, acho pertinente ressaltar que teria incluído esse tipo de configuração em um cenário real.

# Front-end

## Implementação

Para o front-end, busquei utilizar o framework open-source [Next.js](https://nextjs.org/) sobre o [React.js](https://react.dev/) pelas suas otimizações automáticas e  facilidade no gerenciamento de rotas. De acordo com a documentação do React, [utilizar o Next ao criar uma nova aplicação é uma prática recomendada para ambientes de produção](https://react.dev/learn/start-a-new-react-project).

De modo a facilitar a implementação dos elementos da interface e melhorar o visual do front-end, utilizei intensamente a biblioteca open-source [Material UI](https://mui.com/material-ui/). O Material UI implementa, em React, o [Material Design](https://m3.material.io/), um estilo de design desenvolvido pelo Google e utilizado para estilizar todos os seus serviços. Nesse contexto, o Material UI permite fornecer um visual limpo e moderno, com o qual a maior parte dos usuários já está familiarizado por conta de serviços como Gmail, Google Drive e o sistema operacional Android.

Como base para construir a interface, utilizei o template gratuito [Landing Page](https://mui.com/material-ui/getting-started/templates/landing-page/) do Material UI. Costumo começar a implementar interfaces web a partir de templates, de modo a já começar a partir de um design consolidado. Durante o desenvolvimento, minhas principais preocupações foram em  uma interface com um visual moderno, simples e intuitivo. Também tornei cuidado para manter a aplicação responsiva, de modo que ela possa ser utilizada tanto a partir de computadores quanto celulares ou tablets.

Por fim, em algumas partes do projeto optei por utilizar um degradê de fundo com as cores da Jusbrasil e animado de modo simples com CSS, de modo a dar mais vida a interface.

## Qualidade do código

De modo a garantir a qualidade de código do Front-end, utilizei o linter [ESlint](https://eslint.org/) e o formatter [Prettier](https://prettier.io/). Equanto o ESlint checa por problemas de estilo e qualidade de software, o Prettier formata o código, mantendo-o padronizado.

Ambas as ferramentas foram utilizadas em conjunto com suas extensões do Visual Studio Code, de modo que seus efeitos foram aplicados em tempo real.

De modo a garantir que não estou realizando commits com problemas de estilo ou qualidade de código, utilizei o software [Husky](https://typicode.github.io/husky/) em conjunto com o [lint-staged](https://github.com/lint-staged/lint-staged) para executar o ESlint e o Prettier durante todo commit. Nesse contexto, commits com alterações identificadas como problemáticas pelo ESlint são suspensos até que os problemas sejam corrigidos.

# Back-end

## Implementação

Para o back-end, escolhi a linguagem Python pela sua facilidade de uso e ampla gama de ferramentas disponíveis.

A aplicação foi baseada no [FastAPI](https://fastapi.tiangolo.com/), um framework moderno e de alta performance para a criação de APIs com o qual já desenvolvi produtos ao longo dos 2 últimos anos. De acordo com a documentação oficial, as suas principais vantagens são a facilidade de uso, leveza e robustez, tornando-o uma boa escolha para o projeto.

Já o [GraphQL](https://graphql.org/) foi implementado a partir da biblioteca [Strawberry](https://strawberry.rocks/). As principais motivações por trás do uso da Straberry foram a sua simplicidade de uso e possibilidade de integração com o FastAPI, sendo a alternativa recomendada oficialmente para APIs GraphQL implementadas a partir do FastAPI.

Como sugerido pelo enunciado do desafio, utilizei um simples arquivo ```.json``` para simular a base de dados de processos. Optei por essa abordagem ao invés de um banco de dados por razões de simplicidade. Contudo, implementei uma classe ```LawsuitDatabase``` em ```backend/src/database.py``` que encapsula todo o acesso do sistema às informações de processos, de modo que bastaria modificar o funcionamento interno de alguns métodos para integrar o sistema a um banco de dados.

Por fim, utilizei o ChatGPT-4o para gerar os processos fictícios a partir dos campos fornecidos no enunciado do desafio.

## Ambiente de desenvolvimento

Para o gerenciamento de dependências e criação de ambiente virtual, utilizei o [Poetry](https://python-poetry.org/).

Essa ferramenta permite um gerenciamento eficiente e inteligente das dependências e suas versões, sendo uma alternativa mais robusta a apenas utilizar um arquivo `requirements.txt`.

## Qualidade do código

De modo similar ao feito para o front-end, utilizei ferramentas de linting e formatação para garantir que o código não estava com problemas de qualidade.

Utilizei o framework [pre-commit](https://pre-commit.com/) para configurar hooks que eu gostaria que fossem executadas a cada commit.

As hooks que utilizei foram:

- [Flake 8](https://flake8.pycqa.org/en/latest/) : ferramenta de linting que verifica se o código está de acordo com a PEP8 do Python.
- [Black]() : formatter que padroniza o estilo do código de acordo com a PEP8.
- [iSort]() : realiza uma ordenação das importações de cada arquivo `.py`, prezando por organização e legibilidade.
- [pre-commit-hooks]() : Conjunto de hooks padrão do framework. Utilizei os seguintes:
  - **trailing-whitespace**: remove whitespaces no final de linhas
  - **end-of-file-fixer**: garante que todo arquivo termine com uma linha vazia
  - **check-yaml**: checa a sintaxe de arquivos `.yaml`
  - **check-json**: checa a sintaxe de arquivos `.json`

## Testes

Para garantir o correto funcionamento do Back-end, utilizei o framework [Pytest](https://docs.pytest.org/en/8.2.x/) junto ao cliente de testes do FastAPI para realizar diferentes testes na API.

Busquei realizar testes incluindo queries com diferentes combinações dos filtros que implementei, além de verificar casos nos quais nenhum dado deveria ser retornado. Utilizei o ChatGPT-4o para a geração de parte dos testes.

# Melhorias futuras

Ainda que o projeto não possua um prazo rígido, optei por não deixar passar mais de 1 semana entre o meu primeiro e último commit.

Caso fosse realizar mais modificações, poderia tornar a aplicação mais próxima de um cenário real ao integrar um banco de dados para armazenar as informações dos processos.

Outro ponto que poderia ser melhor trabalho é a pesquisa. Enquanto esta aplicação faz simplesmente uma busca com GraphQL, um retriever de documentos baseado em transformers poderia ser utilizado.

Além disso, pensando em um cenário de produção, a configuração de pipelines de CI/CD e a realização de um deploy utilizando os serviços de uma plataforma de computação em nuvem, como Microsoft Azure, também poderiam ser pontos a serem explorados.

Por fim, também solicitaria feedback de usuários e colegas para levantar possíveis novas melhorias para o sistema.
