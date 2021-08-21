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
  date: String
  user: User
  amount: Int
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
  user: User
  donations: [Donation]
}

input PostInput{
  project_name: String
  description: String
  location: String
  fundraise_destination: String
  fundraise_account: String
  results: String
}

input UserInput{
  name: String
  last_name: String
  username: String
  email: String
}

input DonationInput{
  date: String
  user: UserInput
  amount: Int
}

type Auth {
  token: ID
  user: User
}

type Query {
  allPosts: [Post]
  singlePost(postId:ID!): Post
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, last_name: String!, username: String!, email: String!, password: String!): Auth
    addPost(postData: PostInput): Post
    removePost(postId: ID!): Post
  }
`
// image: String
module.exports = typeDefs;