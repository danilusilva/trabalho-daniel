const mongoose = require('mongoose');
require('dotenv').config();

// Função para conectar ao MongoDB usando Mongoose
const conectarMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado ao MongoDB');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);

        // Opção nova de encerrar o processo em caso de falha na conexão (Eu acabei de descobrir, ok Daniel?)
        process.exit(1);
    }
};

module.exports = conectarMongoDB;