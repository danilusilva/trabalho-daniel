const Books = require('../models/books.js');
const Authors = require('../models/authors.js');

// Função para adicionar um novo livro no banco de dados (POST /biblioteca/books)
exports.store = async (req, res) => {
    try {
        const { title, synopsis, year, author, isAvailable, expectedReturnDate } = req.body;
        
       // Busca o autor no banco de dados, caso não exista... Senta e chora!
        if (!await Authors.findOne({ _id: author })) {
            return res.status(404).json({ error: "Autor(a) solicitado(a) nao encontrado(a)" });
        }

        const newBook = await Books.create({ title, synopsis, year, author, isAvailable, expectedReturnDate });
        // Retorna o livro criado com status 201
        return res.status(201).json(newBook); 
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
        // Retorna a lista de livros com status 200
        return res.status(200).json(books);
    } catch (error) {
        // Tratamento de erros internos do servidor
        return res.status(500)
        .json({ error: "Erro interno do servidor ao listar livros", details: error.message });
    }
}