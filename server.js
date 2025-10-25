const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


// Middleware que permite que o servidor entenda requisições com corpo em JSON
app.use(express.json());


// Conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rota de teste
app.get('/', (req, res) =>{
    res.status(200)
    .json({ message: 'Servidor rodando com sucesso!'});
})

// Inicia o servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})