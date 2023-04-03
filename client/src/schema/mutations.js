import { gql } from "@apollo/client";

export const CREATE_STUDENT = gql`
  mutation CreateStudent($newStudent: StudentInput) {
    createStudent(newStudent: $newStudent) {
      id
      password
      username
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      password
      username
    }
  }
`;
