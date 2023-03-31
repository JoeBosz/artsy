import { gql } from "apollo/client";

export const GET_ASSIGNMENTS = gql`
  query Assignments {
    assignments {
      id
      name
    }
  }
`;

export const GET_CLASSES = gql`
  query Classes {
    classes {
      assignments {
        id
        name
      }
    }
  }
`;

export const GET_STUDENTS = gql`
  query Students {
    students {
      id
      password
      username
    }
  }
`;
