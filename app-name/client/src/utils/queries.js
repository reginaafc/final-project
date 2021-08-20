import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
  query allPosts{
    allPosts{
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
      user{
        _id
        name
        last_name
        username
        email
      }

    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query singlePost($postId: ID!){
    singlePost(postId: $postId){
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
    }
  }
`