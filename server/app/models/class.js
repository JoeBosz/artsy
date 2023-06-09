import { model, Schema } from "mongoose";

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  assignments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],
});

const Class = model("class", classSchema);

export default Class;
