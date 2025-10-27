const express = require('express');
const router = express.Router();
const LoanController = require('../controllers/loanscontroller.js');

// ===================================
//  ROTA DE EMPRÉSTIMOS ( /biblioteca/loans )
// ===================================

// Rota para criar um novo empréstimo (POST /biblioteca/loans)
router.post('/', LoanController.store);

module.exports = router;