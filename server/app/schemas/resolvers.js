import { AuthenticationError } from "apollo-server-express";
import { Assignment, Class, Student } from "../models/index.js";
import { signToken } from "../utils/auth.js";

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
    createStudent: async (parent, { username, email, password }) => {
      // create a new user
      const user = await Student.create({ username, email, password });
      // sign the token
      const token = signToken(user);
      // return the token
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      // look up by email
      const user = await Student.findOne({ email });
      // if there is no user, return an error
      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }
      // if there is a user, check the password
      const correctPw = await user.isCorrectPassword(password);
      // if the password is incorrect, return an error
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      // if the password is correct, sign the token
      const token = signToken(user);
      // return the token
      return { token, user };
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
