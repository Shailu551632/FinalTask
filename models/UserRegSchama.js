const mongoose = require('mongoose');

const UserSchama = new mongoose.Schema({

    _id : {
       type: mongoose.Schema.Types.ObjectId
    },

    UserName : {
        type:String
    },

    Email : {
        type: String
    },

    Password : {
        type: String
    },

    otp: {
        type: String
    },

    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }


})

module.exports = mongoose.model('User', UserSchama);