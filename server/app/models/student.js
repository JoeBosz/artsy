const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
  ],
});

const Student = model("Student", studentSchema);

module.exports = Student;
