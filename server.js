const app = require('./src/app.js'); // Importando a configuração do Express
const conectarMongoDB = require('./src/config/database.js'); // Importando a função de conexão com o MongoDB

// Inicia conexão com o MongoDB
conectarMongoDB();

// Inicia o servidor na porta definida no .env ou na porta 3000 por padrão
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})