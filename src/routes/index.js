const express = require('express');
const router = express.Router();

// Importando rotas de usuários
const usersRoute = require('./usersroute.js');


// Usando as rotas de usuários
router.use('/users', usersRoute);


module.exports = router;