import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $last_name: String!, $username: String!, $email: String!, $password: String!) {
    addUser(name: $name, last_name: $last_name, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        name
        last_name
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postData: PostInput){
    addPost(postData: $postData){
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
        _id
        username
        name
        last_name
      }
    }
  }
`