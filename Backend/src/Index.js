//1º importando as funcionalidades do Express
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

/*
*Rota / Recurso(Recurso está normalmente relacionado a uma tabela do banco ou a algum tipo de entidade )
*/

/*
Metodos HTTP:
    GET:Buscar/listar uma informação do back-end;
    POST: Criar uma informação no back-end;
    PUT: ALterar uma informação no back-end;
    DELETE: Deletar uma informação no back-end;
*/

/**
 * Tipos de parâmetro:
 * Query PArams: Parametros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos(é acessivel através de params)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, couchDB(não é certeza que se escreve assim), etc... (cada um desses bancos NoSQL possui sua propria linguagem)
  */

/**
 * Drivers: Select * from users;
 * Query builder: table('users').select('*').where()
 */



app.listen(3333);