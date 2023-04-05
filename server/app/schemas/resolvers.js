<<<<<<< HEAD
const { Class, Assignment, Student } = require("../models");

const resolvers = {
    Query: {    
=======
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
>>>>>>> a2a12734e348207e93b31faaa9e5eacb3a3f3e80
};

export default resolvers;
