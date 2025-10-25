const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o schema para autores
const AuthorsSchema = new Schema({
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
    writingGenre: {
        type: String,
        enum: ['Novel', 'Poetry', 'Fantasy', 'Fiction', 'Mistery', 'Suspense'],
        required: true
        
    }
    
});

module.exports = mongoose.model('Authors', AuthorsSchema);