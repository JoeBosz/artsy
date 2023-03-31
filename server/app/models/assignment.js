import { model, Schema } from "mongoose";

const assignmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Assignment = model("assignment", assignmentSchema);

export default Assignment;
