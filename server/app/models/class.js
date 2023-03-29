const { Schema, model } = require("mongoose");

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

const Class = model("Class", classSchema);

module.exports = Class;
