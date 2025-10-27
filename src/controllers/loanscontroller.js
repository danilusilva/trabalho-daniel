const Loans = require('../models/loans.js');
const Books = require('../models/books.js');
const Users = require('../models/users.js');

// Função para calcular data de retorno a partir da data de empréstimo
const calculateReturnDate = () => {
    const today = new Date();
    const returnDate = new Date(today);
    // Adicionar os 3 dias
    returnDate.setDate(today.getDate() + 3);
    return returnDate;

}


// Função para realizar um novo empréstimo
exports.store = async (req, res) => {
    try {

        // Dados do corpo da requisição recebida
        const { userId, bookId} = req.body;

        // Validações usuário buscando somente o nome e o id na base de dados
        const requestedUser = await Users.findOne({ _id: userId }).select('_id');

        if (!requestedUser) {
            return res.status(404).json({ error: "Usuário não cadastrado" });
        }

        // Validações livro
        const requestedBook = await Books.findOne({ _id: bookId }).select('_id isAvailable expectedReturnDate');

        if (!requestedBook) {
            return res.status(404).json({ error: "Livro solicitado não encontrado" });
        }

        // Armazena o valor do atributo expectedReturnDate
        const bookExpectedReturnDate = requestedBook.expectedReturnDate;
        // Data atual
        const today = new Date();

        if (requestedBook.isAvailable === false && bookExpectedReturnDate && bookExpectedReturnDate < today ) {
            // Atualizando informações do livro no banco de dados
                await Books.updateOne(
                    { _id: requestedBook._id },
                    { $set: { 
                        isAvailable: true,
                        expectedReturnDate: null
                    } 
                }); 

                // Atualizando informações do livro localmente
                requestedBook.isAvailable = true;
                requestedBook.expectedReturnDate = null;
            }

        if (requestedBook.isAvailable === false) {
            return res.status(400).json({ error: "Livro indisponível para empréstimo no momento!" });
        }

        // Calcula a data de retorno
        const newExpectedReturnDate = calculateReturnDate();

        // Criando empréstimo
        const newLoan = await Loans.create({ 
            user: requestedUser._id,
            book: requestedBook._id, 
            returnDate: newExpectedReturnDate });

            // Atualizando informações do livro
        await Books.updateOne(
            { _id: requestedBook._id },
            { $set: { isAvailable: false,
              expectedReturnDate: newExpectedReturnDate } },

        );
        
        // Retorna o empréstimo criado com status 201
        return res.status(201)
        .json({ 
            message: "Emprestimo realizado com sucesso", 
            loan: newLoan}); 
    } catch (error) {
        return res.status(500).json({ error: "Erro interno do servidor ao realizar empréstimo", details: error.message });
    }
};