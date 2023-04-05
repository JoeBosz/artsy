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
    async createStudent(parent, { newStudent }) {
      const token = await Student.create(newStudent);
      return { token };
    },
    async login(parent, { username, password }) {
      console.log(username, password);
      const token = await Student.findOne({ username });
      return token;
    },
    createClass: async (_, { newClass }) => {
      return await Class.create(newClass);
    },
    createAssignment: async (_, { newAssignment }) => {
      return await Assignment.create(newAssignment);
    },
  },
};

export default resolvers;
