const express = require('express');
const app = express();

// Importando rotas
const testroute = require('./routes/testroute.js');

// Rotas
app.use('/', testroute);

// Middleware que permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());

module.exports = app;