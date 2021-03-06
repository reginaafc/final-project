const { AuthenticationError } = require("apollo-server-express");
const { User, Donation, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    allPosts: async () => {
      // console.log("getting all posts");
      const foundPosts = await Post.find({});
      // console.log(foundPosts);
      return foundPosts;
    },
    singlePost: async (parent, { postId }) => {
      // console.log("tryng to find single post");
      const foundPost = await Post.findById(postId);

      console.log(foundPost);
      return foundPost;
    },
    singleUser: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.find({ "user.userId" : context.user._id });
        console.log(post);
        return post;
      }
      throw new AuthenticationError("You need to be logged in");
    }
  },

  Mutation: {
    // Create a new user
    addUser: async (parent, { name, last_name, username, email, password }) => {
      // console.log("Trying");
      const user = await User.create({
        name,
        last_name,
        username,
        email,
        password,
      });
      // Send the user to the signtoken function, this will mount the user in the payload of the jwt and  return the token
      const token = signToken(user);
      return { token, user };
    },
    // Log in a user
    login: async (parent, { email, password }) => {
      // Check if email exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // If user exists, check if the provided password is the same as the one encripted in the database
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      // Send the user to the signtoken and get the jwt back
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { postData }, context) => {
      // Check if user exists, retrieve user info
      // console.log("postData", postData);
      if (context.user) {
        const foundUser = await User.findOne({ _id: context.user._id });
        const foundUserFormatted = {
        userId: foundUser._id,
        name: foundUser.name,
        last_name: foundUser.last_name,
        username: foundUser.username,
        email: foundUser.email,
        };
        console.log("foundUserFormatted", foundUserFormatted);
        console.log("postData", postData);
        const newPost = await Post.create({
          ...postData,
          user: foundUserFormatted,
          new : true
        });
        // console.log("newPost", newPost);
        console.log("Created a new post!");
        return newPost;
      }
      // console.log("context.user", context.user);
      throw new AuthenticationError("There was an error creating the post");
    },
    removePost: async (parent, { postId }, context) => {
      // Check if user is logged in
      if (context.user) {
        const post = await Post.findOneAndDelete({ _id: postId });
        return post;
      }
      console.log("context.user", context.user);
      throw new AuthenticationError("There was an error creating the post");
    },
    addDonation: async (parent, {postId, donation}) => {
      console.log("postId", postId);
      console.log("donation", donation);
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $push: { donations: donation } },
        { new: true }   
      );
      console.log("post", post);
      return post;
    }
  },
};

module.exports = resolvers;
