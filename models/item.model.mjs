import { Schema, model } from "mongoose";

// import Debug from "../utils/Debug.mjs";

const itemSchema = new Schema({
  title: String,
  start_date: String,
  end_date: String,
  describtion: String,
  type: {
    type: String,
    required: true,
  },
  link: String,
});

export default model("Item", itemSchema);
