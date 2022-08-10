const { gql } = require("apollo-server-express");

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
    time: String
    contact: String
    title: String
    rsvps: [Rsvp]
  }

  type Rsvp {
    _id: ID
    posts: [Post]
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
    rsvp(_id: ID!): Rsvp
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(
      postText: String!
      location: String!
      contact: String!
      time: String!
      volunteerDate: String!
      title: String!
    ): Post
    addGoingTo(postId: ID!, goingTo: Boolean): Rsvp
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addRsvp(posts: [ID]!): Rsvp
    removeRSVP(cartID: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
