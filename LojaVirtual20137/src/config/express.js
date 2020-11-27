require('marko/node-require').install();
require('marko/express');

const session = require('express-session');

const express = require('express');
const aplicacao = express();
const bodyParser = require('body-parser');
aplicacao.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');


aplicacao.use(session({
    secret: 'odesempre',
    saveUninitialized: true,
    resave: true
}));

rotas(aplicacao);

module.exports = aplicacao;