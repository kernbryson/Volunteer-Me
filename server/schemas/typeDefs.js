const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
    rsvp: Rsvp
  }

  type Category {
    _id: ID
    name: String
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
    category: Category
    icon: String
    volunteerDate: String
    location: String
    time:String
    contact:Int
  }

  type Rsvp {
   _id: ID
    post: Post
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addRSVP(cartID: ID!, commentId: ID!): Post
    removeRSVP(cartID: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
