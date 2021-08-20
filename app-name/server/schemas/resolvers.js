const { AuthenticationError } = require("apollo-server-express");
const { User, Donation, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return await User.find({});
    },
    donation: async () => {
      return await Donation.find({}).populate("user").populate("post");
    },
    post: async () => {
      return await Post.find({}).populate("user");
    },
  },

  Mutation: {
    // Create a new user
    addUser: async (parent, { name, last_name, username, email, password }) => {
        console.log("Trying");
      const user = await User.create({ name, last_name, username, email, password });
      // Send the user to the signtoken function, this will mount the user in the payload of the jwt and  return the token
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
