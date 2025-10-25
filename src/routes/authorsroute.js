const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorscontroller.js');

// ===================================
//  ROTAS DE AUTORES ( /biblioteca/authors )
// ===================================

// Rota para criar um novo autor (POST /biblioteca/authors)
router.post('/', AuthorController.store);

// Rota para obter todos os autores (GET /biblioteca/authors)
router.get('/', AuthorController.index);

module.exports = router;