const mongoose = require('mongoose');



const TranSchama = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId
    },

    email: {
        type: String,   
    },

    fromAddress: {
        type: String
    },

    toAddress: {
        type: String
    },

    amount: {
        type: String
    },

    hash: {
        type: String
    },

    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})


const Transaction = new mongoose.model('bnb', TranSchama);
module.exports = Transaction;