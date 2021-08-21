import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      project_name
      publication_date
      image
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query singlePost($postId: ID!) {
    singlePost(postId: $postId) {
      _id
      project_name
      description
      publication_date
      location
      image
      fundraise_destination
      fundraise_account
      results
      expiration_date
      donation_desired
      user {
        username
        email
      }
      donations {
        _id
        amount
        date
        userId
      }
    }
  }
`;

export const QUERY_USER_POSTS = gql`
  query singleUser {
    singleUser {
      _id
      project_name
    }
  }
`;
