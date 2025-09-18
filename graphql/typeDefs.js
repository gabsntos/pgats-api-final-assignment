const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    tasks: [Task]
    notes: [Note]
  }

  type Mutation {
    login(username: String!, password: String!): AuthPayload
    createNote(content: String!): Note
    deleteNote(id: Int!): DeletePayload
  }

  type Task {
    id: Int
    title: String
  }

  type Note {
    id: Int
    content: String
  }

  type AuthPayload {
    token: String
    error: String
  }

  type DeletePayload {
    message: String
    note: Note
    error: String
  }
`;
