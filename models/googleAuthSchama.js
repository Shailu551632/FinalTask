const mongoose = require('mongoose');

const googleSchama = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    email: {
        type: String
    },

    secretkey: {
        type: String
    },

    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const googleAuth = new mongoose.model('googleauth', googleSchama);
module.exports = googleAuth;