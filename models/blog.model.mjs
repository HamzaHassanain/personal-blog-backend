import { Schema, model } from "mongoose";
import { Status } from "../utils/consts.mjs";

// import Debug from "../utils/Debug.mjs";

const blogSchema = new Schema({
  title: String,
  publish_date: String,
  describtion: String,
  body: String,
  parsed: String,
  image: {
    id: String,
    url: String,
  },
  tags: [String],
  type: {
    // you can call it category
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: Status.NotPublished,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("Blog", blogSchema);
