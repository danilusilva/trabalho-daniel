const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userscontroller.js');


// ===================================
//  ROTAS DE USUÁRIOS ( /api/v1/users )
// ===================================

// Rota para criar um novo usuário (POST /biblioteca/users)
router.post('/', UserController.store);


// Rota para obter todos os usuários (GET /biblioteca/users)
router.get('/', UserController.index);

module.exports = router;