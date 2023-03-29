import { Assignment, Class, Student } from "./models";

export const resolvers = {
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
    createClass: async (_, { input }) => {
      return await Class.create(input);
    },
    createStudent: async (_, { input }) => {
      return await Student.create(input);
    },
    createAssignment: async (_, { input }) => {
      return await Assignment.create(input);
    },
  },
};
