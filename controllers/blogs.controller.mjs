import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import Blog from "../models/blog.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError, ErrorResponse } from "../utils/ErrorResponse.mjs";
import { Status, types } from "../utils/consts.mjs";
import { v2 as cloudinary } from "cloudinary";
const MAIN_PAGE = "blogs";
const EDIT_PAGE = "edit_blogs";

export const getblogsPage = async (req, res, next) => {
  try {
    const data = await Blog.find({});
    res.render(MAIN_PAGE, { err: null, data });
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const getNewblogPage = async (req, res, next) => {
  // const id = req.params.id;
  try {
    // Debug.info("SYCCSCSDSFSDFSDFS");
    res.render(EDIT_PAGE, { err: null, data: {} });
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const getEditblogsPage = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const data = await Blog.findById(_id);
    if (!data) return res.redirect("/404");
    // Debug.info(data);
    res.render(EDIT_PAGE, { err: null, data });
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const handleAddblog = async (req, res, next) => {
  const { title, publish_date, describtion, body, tags, type } = req.body;

  try {
    if (!type) throw new ErrorResponse("Blog Type is required");
    const blog = new Blog({
      title,
      publish_date,
      describtion,
      body,
      tags,
      type,
    });
    await blog.save();
    res.redirect("/admin/blog/edit/" + blog.id);
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const handleEditblog = async (req, res, next) => {
  const { title, publish_date, describtion, body, tags, type } = req.body;
  const _id = req.params.id;
  try {
    const blog = await Blog.findById(_id);
    if (!blog) if (!data) return res.redirect("/404");
    blog.title = title;
    blog.publish_date = publish_date;
    blog.describtion = describtion;
    blog.body = body;
    blog.title = title;
    blog.tags = tags;
    blog.type = type;
    await blog.save();
    res.redirect("/admin/blog/edit/" + blog.id);
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const handlePublishblog = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const blog = await Blog.findById(_id);
    if (!blog) if (!data) return res.redirect("/404");

    blog.status = Status.Published;
    await blog.save();
    res.redirect("/admin/blog/");
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleUnPublishblog = async (req, res, next) => {
  const _id = req.params.id;

  try {
    const blog = await Blog.findById(_id);
    if (!blog) if (!data) return res.redirect("/404");

    blog.status = Status.NotPublished;
    await blog.save();
    res.redirect("/admin/blog/");
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleDeleteblog = async (req, res, next) => {
  try {
    const _id = req.params.id;
    await Blog.findByIdAndDelete(_id);
    res.redirect("/admin/blog/");
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleDashboardUploadImage = async (req, res, next) => {
  try {
    const _id = req.params.id;
    Debug.error(_id);
    const blog = await Blog.findById(_id);
    Debug.success(blog);
    blog.image?.id && (await cloudinary.uploader.destroy(blog.image.id));
    Debug.success(req.file);
    blog.image.url = req.file.path;
    blog.image.id = req.file.filename;
    Debug.info(blog);
    await blog.save();
    res.redirect("/admin/blog/edit/" + blog.id);
    next();
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
