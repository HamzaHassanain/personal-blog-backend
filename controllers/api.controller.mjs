import Debug from "../utils/Debug.mjs";
import Blog from "../models/blog.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import {
  AuthError,
  ErrorResponse,
  NotFoundError,
} from "../utils/ErrorResponse.mjs";
import { Status, types } from "../utils/consts.mjs";

export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    res.json(new SuccessResponse(blogs));
  } catch (err) {
    Debug.error(err);
    err.page = "api";
    next(err);
  }
};

export const getSingleBlog = async (req, res, next) => {
  const slug = req.params.slug;
  try {
    if (!slug) throw new ErrorResponse("No slug found");
    const blog = await Blog.findOne({ slug });
    if (!blog) throw new NotFoundError(`No blog with this slug ${slug}`);
    res.json(new SuccessResponse(blog));
  } catch (err) {
    Debug.error(err);
    err.page = "api";
    next(err);
  }
};
export const getOfType = async (req, res, next) => {
  const type = req.params.type;
  try {
    if (!type) throw new ErrorResponse("No type found");
    const blogs = await Blog.find({ type });
    res.json(new SuccessResponse(blogs));
  } catch (err) {
    Debug.error(err);
    err.page = "api";
    next(err);
  }
};
