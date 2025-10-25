const express = require('express');
const router = express.Router();

// Rota de teste para verificar se o servidor está funcionando
router.get('/', (req, res) => {
    res.status(200)
    .json({message: 'Rota de teste funcionando!'});
});

module.exports = router;