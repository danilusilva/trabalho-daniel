const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o schema para livros
const BooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Authors',
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    expectedReturnDate: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Books', BooksSchema);