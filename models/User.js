const mongoose = require("mongoose");

const User = new mongoose.Schema({

    email: {
        required: true,
        type: String,
        minlength: 6,
        maxlength: 254,
        unique: true
    },

    username: {
        required: true,
        type: String,
        unique: true,
        minlength: 3,
        maxlength: 21
    },

    password: {
        required: true,
        type: String,
        minlength: 7,
        maxlength: 1000
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model("user", User );