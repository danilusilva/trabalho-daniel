const Books = require('../models/books.js');

// Função para adicionar um novo livro no banco de dados (POST /biblioteca/books)
exports.store = async (req, res) => {
    try {
        const { title, synopsis, year, author, isAvailable, expectedReturnDate } = req.body;

        const newBook = await Books.create({ title, synopsis, year, author, isAvailable, expectedReturnDate });
        return res.status(201).json(newBook); // Retorna o livro criado com status 201
    } catch (error) {
        // Tratamento de erros
        if (error.code === 11000) {
            // Erro de duplicidade
            return res.status(400).json({ error: "Livro ja cadastrado no sistema" });
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
        const books = await Books.find();
        return res.status(200).json(books); // Retorna a lista de livros com status 200
    } catch (error) {
        // Tratamento de erros internos do servidor
        return res.status(500)
        .json({ error: "Erro interno do servidor ao listar livros", details: error.message });
    }
}