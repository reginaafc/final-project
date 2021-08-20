const { AuthenticationError } = require('apollo-server-express');
const { User, Donation, Post } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        user: async () => {
            return await User.find({})
        },
        donation: async () => {
            return await Donation.find({}).populate('user').populate('post')
        },
        post: async () => {
            return await Post.find({}).populate('user')
        }
    },

};

module.exports = resolvers;