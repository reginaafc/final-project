const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  project_name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  publication_date: {
    type: Date,
    required: true
    // default: Date.now 
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
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  fundraise_account: {
    type: Number,
    validate: {
      validator: function (v) {
        return /d{10}/.test(v);
      },
      message: '{VALUE} is not a valid 10 digit number!'
    }
  },
  results: {
    type: String
  },
  expiration_date: {
    type: Date,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
