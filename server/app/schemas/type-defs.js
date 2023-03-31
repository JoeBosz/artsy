export default `
  type Query {
    classes: [Class]
    students: [Student]
    assignments: [Assignment]
  }
  type Mutation {
    "Create a new student user"
    createStudent(input: StudentInput): Student
    "Login a student user"
    login(username: String!, password: String!): Student
    "Add a new class to student user"
    addClass(input: ClassInput): Class
    "Remove a class from student user"
    removeClass(id: ID!): Class
    "Add a new assignment to a class"
    addAssignment(input: AssignmentInput): Assignment
  }
  "Create user student login response"
  type LoginResponse {
    "JWT"
    token: ID!
    "Student user"
    user: Student
  }
  input StudentInput {
    username: String!
    password: String!
  }
  type Class {
    id: ID!
    name: String!
    assignments: [Assignment]
  }
  type Student {
    id: ID!
    username: String!
    password: String!
  }
  type Assignment {
    id: ID!
    name: String!
  }
`;
