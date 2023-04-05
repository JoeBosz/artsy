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
  
  "Class type with included assignments"
  type Class {
    id: ID!
    name: String!
    assignments: [Assignment]
  }
  
  "Registered student user"
  type Student {
    id: ID
    username: String!
    password: String!
  }
  
  "Assignment type embedded in class"
  type Assignment {
    id: ID!
    name: String!
  }

  "Student input type"
  input StudentInput {
    username: String!
    password: String!
  }

  "Class input type"
  input ClassInput {
    name: String!
  }

  "Assignment input type"
  input AssignmentInput {
    name: String!
  }
`;
