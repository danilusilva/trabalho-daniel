const express = require('express');
const app = express();

// Middleware que permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());

module.exports = app;