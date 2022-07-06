const mongoose = require('mongoose');

const bnbBalScha = new mongoose.Schema({
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

const bnbBalance = new mongoose.model('bnbbalance', bnbBalScha);
module.exports = bnbBalance;