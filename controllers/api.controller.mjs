import Debug from "../utils/Debug.mjs";
import Blog from "../models/blog.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError, ErrorResponse } from "../utils/ErrorResponse.mjs";
import { Status, types } from "../utils/consts.mjs";

export const getAllBlogs = async (req, res, next) => {
  res.json({ fuck: "You" });
};

export const getSingleBlog = async (req, res, next) => {
  res.json({ fuck: "You" });
};
export const getOfType = async (req, res, next) => {
  res.json({ fuck: "You" });
};
