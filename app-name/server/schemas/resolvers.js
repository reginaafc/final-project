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

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
    }

};

module.exports = resolvers;