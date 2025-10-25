const express = require('express');
const app = express();
const routes = require('./routes/index.js');

// Middleware que permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());

app.use('/biblioteca', routes);

// Capturador de rotas não encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ error: "Rota não encontrada" });
});

module.exports = app;