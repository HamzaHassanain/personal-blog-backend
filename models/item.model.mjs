import { Schema, model } from "mongoose";
import { Status } from "../utils/consts.mjs";

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
  status: {
    type: String,
    default: Status.NotPublished,
  },
});

export default model("Item", itemSchema);
