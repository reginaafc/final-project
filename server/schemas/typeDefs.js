const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  name: String
  last_name: String
  username: String
  email: String
  password: String
}

type Donation {
  _id: ID
  amount: Float
  date: String
  userId: String
}

type Post {
  _id: ID
  project_name: String
  description: String
  publication_date: String
  location: String
  image: String
  fundraise_destination: String
  fundraise_account: String
  results: String
  expiration_date: String
  donation_desired: Float
  user: UserSubSchema
  donations: [Donation]
}

type UserSubSchema{
  name: String
  last_name: String
  username: String
  email: String
  userId: String
}


input DonationInput{
  amount: String
  userId: String
}

input PostInput{
  project_name: String
  description: String
  location: String
  fundraise_destination: String
  fundraise_account: String
  results: String
  donation_desired: String
  image: String
}

input UserInput{
  name: String
  last_name: String
  username: String
  email: String
}

type Auth {
  token: ID
  user: User
}

type Query {
  allPosts: [Post]
  singlePost(postId:ID!): Post
  singleUser: [Post]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, last_name: String!, username: String!, email: String!, password: String!): Auth
    addPost(postData: PostInput): Post
    removePost(postId: ID!): Post
    addDonation(postId: ID!, donation: DonationInput): Post
  }
`
// image: String
module.exports = typeDefs;