import { Assignment, Class, Student } from "../models/index.js";

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find();
    },
    students: async () => {
      return await Student.find();
    },
    assignments: async () => {
      return await Assignment.find();
    },
  },
  Mutation: {
    createClass: async (_, { newClass }) => {
      return await Class.create(newClass);
    },
    createStudent: async (_, { newStudent }) => {
      return await Student.create(newStudent);
    },
    createAssignment: async (_, { newAssignment }) => {
      return await Assignment.create(newAssignment);
    },
  },
};

export default resolvers;
