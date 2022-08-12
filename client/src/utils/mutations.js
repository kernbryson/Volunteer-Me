import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RSVP = gql`
  mutation addRsvp($posts: [ID]!) {
    addRsvp(posts: $posts) {
      posts {
        _id
        postText
        postAuthor
        location
        contact
        time
        volunteerDate
        title
        createdAt
        comments {
          _id
          commentText
        }
      }
    }
  }
`;
export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const ADD_VOLUNTEER = gql`
  mutation addVolunteer($postId: ID!) {
    addVolunteer(postId: $postId) {
      _id
      title
      volunteers
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost(
    $postText: String!
    $location: String!
    $contact: String!
    $time: String!
    $volunteerDate: String!
    $title: String!
    $category: String!
  ) {
    addPost(
      postText: $postText
      location: $location
      contact: $contact
      time: $time
      volunteerDate: $volunteerDate
      title: $title
      category: $category
    ) {
      _id
      postText
      postAuthor
      location
      contact
      time
      volunteerDate
      title
      category
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
