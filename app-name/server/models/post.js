const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  project_name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  publication_date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String
  },
  image: {
    type: String
  },
  fundraise_destination: {
    type: String
  },
  fundraise_account: {
    type: String,
  },
  results: {
    type: String
  },
  expiration_date: {
    type: Date,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Donation'
    }
  ]
});
const Post = model('Post', postSchema);
module.exports = Post;