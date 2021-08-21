const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');
const userSubSchema = require("./userSubSchema");
const donationSubSchema = require("./Donation");

const postSchema = new Schema({
  project_name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  publication_date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  location: {
    type: String,
  },
  image: {
    type: String,
  },
  fundraise_destination: {
    type: String,
  },
  fundraise_account: {
    type: String,
  },
  results: {
    type: String,
  },
  expiration_date: {
    type: Date,
  },
  donation_desired: {
    type: Number,
  },
  user: {
    type: userSubSchema,
    default: {},
  },
  donations: [
    {
      type: donationSubSchema,
      default: {},
    },
  ],
});
const Post = model("Post", postSchema);
module.exports = Post;
