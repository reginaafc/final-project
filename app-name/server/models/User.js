const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
});

const User = model('User', userSchema);

module.exports = Matchup;