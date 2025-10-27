const express = require('express');
const router = express.Router();

// Importando rota de teste
const testRoute = require('./testroute.js');
router.use('/', testRoute);

// Importando rotas de usuários
const usersRoute = require('./usersroute.js');
const authorsRoute = require('./authorsroute.js');
const booksRoute = require('./booksroute.js');
const loansRoute = require('./loansroute.js');


// Usando as rotas de usuários
router.use('/users', usersRoute);

// Usando as rotas de autores
router.use('/authors', authorsRoute);

// Usando as rotas de livros
router.use('/books', booksRoute);

// Usando as rotas de empréstimos
router.use('/loans', loansRoute);



module.exports = router;