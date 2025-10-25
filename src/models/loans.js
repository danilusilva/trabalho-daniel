const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definindo o schema para empréstimos
const LoansSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    book: {
        type: String,
        required: true
    },
    loanDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    returnDate: {
        type: Date,
        default: null
    },
});

module.exports = mongoose.model('Loans', LoansSchema);