const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express(); //instanciando meu app

app.use(cors());
app.use(express.json()); //informar o express converter o json pra obj
app.use(routes);
app.listen(3333); //ouvindo a porta 3333

/*
    Tipos de parâmetros

    Query: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
        Ex: http://url.com.br/users?name=Ale&page=1
    Route: Parametros utilizados para identificar recursos
        Ex: /users/id:1
    Request body:  Corpo da requisição, utilizado para criar ou alterar recursos  
*/ 

/*
    Bancos de dados

    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
*/

/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/ 