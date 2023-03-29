const { Schema, model } = require("mongoose");

const assignmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Assignment = model("Assignment", assignmentSchema);

module.exports = Assignment;
