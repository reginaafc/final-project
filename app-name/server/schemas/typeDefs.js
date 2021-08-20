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
  user: [User]
  post: [Post]
}

type Post {
  _id: ID
  project_name: String
  description: String
  publication_date: String
  location: String
  image: String
  fundraise_destination: String
  fundraise_account: Float
  results: String
  expiration_date: String
  user: [User]
}

type Auth {
  token: ID
  user: User
}

type Query {
  user: [User]
  donation: [Donation]
  post: [Post]
  }

type Mutation {
    addUser(name: String!, last_name: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs;