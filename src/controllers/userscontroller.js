const Users = require("../models/users.js");

// Função para criar um novo usuário no banco de dados (POST /biblioteca/users)
exports.store = async (req, res) => {
  try {
    const { name, birthDate, sex, adress } = req.body;

    const newUser = await Users.create({ name, birthDate, sex, adress });
    // Retorna o usuário criado com status 201
    return res.status(201).json(newUser); 
  } catch (error) {
    // Tratamento de erros
    if (error.code === 11000) {
      // Erro de duplicidade
      return res.status(400).json({ error: "Nome de usuário já cadastrado" });
    }

    // Erros mongoose
    if (error.name === "ValidationError") {
        return res.status(400)
        .json({ error: error.message });
    }

    // Outros erros internos do servidor
    return res.status(500)
    .json({ error: "Erro interno do servidor", details: error.message });
  }
};

// Função para obter todos os usuários do banco de dados (GET /biblioteca/users)
exports.index = async (req, res) => {
    try {
        const users = await Users.find();
        // Retorna a lista de usuários com status 200
        return res.status(200).json(users); 
    } catch (error) {
        // Tratamento de erros internos do servidor
        return res.status(500)
        .json({ error: "Erro interno do servidor ao listar usuários", details: error.message });
    }
};