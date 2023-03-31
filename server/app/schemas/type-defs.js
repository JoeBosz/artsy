// TODO: Consider adding additional documentation to the type definitions
export default `
  type Query {
    classes: [Class]
    students: [Student]
    assignments: [Assignment]
  }
  
  type Mutation {
    "Create a new student user"
    createStudent(newStudent: StudentInput): Student

    "Login a student user"
    login(username: String!, password: String!): Student

    "Add a new class to student user"
    createClass(newClass: ClassInput): Class

    "Remove a class from student user"
    removeClass(id: ID!): Class

    "Add a new assignment to a class"
    createAssignment(newAssignment: AssignmentInput): Assignment
  }
  
  "Create user student login response"
  type LoginResponse {
    "JWT"
    token: ID!
    "Student user"
    user: Student
  }
  
  type Class {
    id: ID!
    name: String!
    assignments: [Assignment]
  }
  
  type Student {
    id: ID
    username: String!
    password: String!
  }
  
  type Assignment {
    id: ID!
    name: String!
  }

  input StudentInput {
    username: String!
    password: String!
  }
  input ClassInput {
    name: String!
  }
  input AssignmentInput {
    name: String!
  }
`;
