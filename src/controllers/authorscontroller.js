const Authors = require('../models/authors.js');

// Controlador para criar um novo autor
exports.store = async (req, res) => {
    try {
        const { name, birthDate, sex, writingGenre } = req.body;

        const newAuthor = await Authors.create({ name, birthDate, sex, writingGenre });
        // Retorna o autor criado com status 201
        return res.status(201).json(newAuthor); 
    } catch (error) {
        // Tratamento de erros
        if (error.code === 11000) {
            // Erro de duplicidade
            return res.status(400).json({ error: "Autor(a) já cadastrado(a) no sistema" });
        }

        // Erros mongoose
        if (error.name === "ValidationError") {
            // Erros de validação
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400)
            .json({ 
                error: "Erro de validação",
                details: messages});
        }

        // Outros erros internos do servidor
        return res.status(500)
        .json({ error: "Erro interno do servidor", details: error.message });
    }
};

exports.index = async (req, res) => {
    try {
        const authors = await Authors.find();
        // Retorna a lista de autores com status 200
        return res.status(200).json(authors);
    } catch (error) {
        // Tratamento de erros internos do servidor
        return res.status(500)
        .json({ error: "Erro interno do servidor ao listar autores", details: error.message });
    }
};