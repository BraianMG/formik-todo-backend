import { Schema, model } from "mongoose";
import { ITodo } from "../interfaces";

const TodoSchema = new Schema<ITodo>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "The Description is required"],
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// TODO: tratar de no devolver '__v'

export const Todo = model("Todo", TodoSchema);
