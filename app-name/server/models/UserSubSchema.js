const { Schema } = require('mongoose');
const userSubSchema = new Schema({
    userId: {
        type: String,
        required: true,
      },
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
});

module.exports = userSubSchema;