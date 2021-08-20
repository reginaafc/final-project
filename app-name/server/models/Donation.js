const { Schema, model } = require(‘mongoose’);
const donationSchema = new Schema({
    // user: {
    //     type: String,
    //     required: true,
    //     unique: false,
    //     trim: true,
    // },
    donation: {
        type: Number,
        required: true,
        min: 0.99
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // id_post: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: ‘Post’
    //     }
    // ],
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: ‘User’
        }
    ]
});
const Donation = model(‘Donation’, donationSchema);
module.exports = Donation;