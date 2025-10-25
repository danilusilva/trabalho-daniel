const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o schema para usuários
const UsersSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true,
    }   
});

module.exports = mongoose.model('Users', UsersSchema);