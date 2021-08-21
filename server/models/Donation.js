const { Schema, model } = require("mongoose");

const donationSubSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    min: 0.99,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
  },
});

module.exports = donationSubSchema;
