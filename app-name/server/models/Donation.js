const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    id: {
        type: Number
    },
    user: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    donation: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    id_post: {

    },

});

const Donation = model('Donation', donationSchema);

module.exports = Donation;