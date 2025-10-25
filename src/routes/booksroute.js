const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookscontroller.js');

// ===================================
//  ROTAS DE LIVROS ( /biblioteca/books )
// ===================================

// Rota para criar um novo livro (POST /biblioteca/books)
router.post('/', BookController.store);

// Rota para obter todos os livros (GET /biblioteca/books)
router.get('/', BookController.index);

module.exports = router;