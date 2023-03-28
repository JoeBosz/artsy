import { gql } from "apollo-server-express";

const typeDefs = gql`
  # Define Query type: user (returns a student object)
  type Query {
    user: student
  }
  # Define Mutation type: login (returns a student object)
  type student {
    id: ID!
    username: String!
    password: String!
  }
  # Define Mutation type: login (returns a student object)
  type Mutation {
    login(username: String!, password: String!): student
    addUser(username: String!, password: String!): student
  }
  # Define assignment type: _id, name
  type assignment {
    id: ID!
    name: String!
  }
  # Define class type: _id, name, assignments
  type class {
    id: ID!
    name: String!
    assignments: [assignment]
  }
  # Define auth type: token, user
  type auth {
    token: ID!
    user: student
  }
`;

export default typeDefs;
