const mongoose = require('mongoose');

const ethBalSach = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },

    address: {
        type: String
    },

    balance: {
        type: String
    },

    checked_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const ethBalance = new mongoose.model('ethbalance', ethBalSach);
module.exports = ethBalance;