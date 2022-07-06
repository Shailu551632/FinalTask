const mongoose = require('mongoose');


const ethTranSchama = new mongoose.Schema({

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

const ethTransaction = new mongoose.model('eth', ethTranSchama);
module.exports = ethTransaction;