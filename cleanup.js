const mongoose = require('mongoose')
require('dotenv').config();

// Importando todos os schemas do projeto
const User = require('./src/models/users.js')
const Author = require('./src/models/authors.js')
const Books = require('./src/models/books.js')
const Loans = require('./src/models/loans.js')

// Colocando todos os schemas dentro de um array para facilitação de remoção
const schemas = [User, Author, Books, Loans];

async function cleanupCollections() {
    try {
        // Conectar no banco de dados
        console.log('Conectando ao mongoDB...')
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conecxão estabelecida...')

        console.log('Iniciando a exclusão das coleções...');

        await mongoose.connection.dropDatabase();
        console.log('Coleções excluidas com sucesso!');

    } catch (error) {
        console.error('ERRO durante a limpeza do DB: ', error.message);
        process.exit(1);
    } finally {
        // Desconectar do banco de dados
        await mongoose.connection.close();
        console.log('Conexão encerrada. Script de collections finalizado!')
    }
}

cleanupCollections();