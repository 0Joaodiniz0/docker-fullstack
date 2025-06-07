# Projeto Dockerizado Full Stack

## Como rodar

1. Tenha Docker e Docker Compose instalados.
2. Na raiz do projeto, execute: docker-compose up --build
3. O frontend estará disponível em `http://localhost:3000`
4. O backend estará disponível em `http://localhost:3001`
5. O banco de dados PostgreSQL está rodando dentro do container `db`.

## Estrutura do projeto

- `/backend` - código do backend Node.js
- `/frontend` - código do frontend React.js
- `docker-compose.yml` - orquestração dos containers
- `.env` - variáveis de ambiente para o banco de dados

## Tecnologias usadas

- Node.js com Express
- React.js
- PostgreSQL
- Docker e Docker Compose

## Testando a Conexão com o Banco de Dados

Para verificar se o banco de dados PostgreSQL está funcionando corretamente, você pode executar os seguintes comandos:

1. Liste os containers em execução:
   ```bash
   docker ps

2. Acesse o terminal do container do banco de dados:
docker exec -it docker-fullstack-db-1 sh

3. Acesse o PostgreSQL dentro do container:
psql -U user -d appdb

4. Execute uma query de teste:
SELECT NOW();

Se tudo estiver funcionando corretamente, o comando SELECT NOW(); irá retornar a data e hora atual do servidor.