import { model, Schema } from "mongoose";

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

// TODO: Add 🪝s to encrypt password

const Student = model("student", studentSchema);

export default Student;
