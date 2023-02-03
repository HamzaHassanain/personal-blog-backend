import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import itemModel from "../models/blog.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";
import { types } from "../utils/consts.mjs";

const MAIN_PAGE = "blogs";
const EDIT_PAGE = "edit_blogs";

export const getblogsPage = async (req, res, next) => {
  try {
    const data = await itemModel.find({ type: types.blog });
    res.render(MAIN_PAGE, { err: null, data: [1, 12, 3, "", 4, 5, 5] });
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const getNewblogPage = async (req, res, next) => {
  // const id = req.params.id;
  try {
    res.render(EDIT_PAGE, { err: null, data: null });
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const getEditblogsPage = async (req, res, next) => {
  const _id = req.params.id;
  try {
    Debug.info(_id);
    res.render(EDIT_PAGE, { err: null, data: { _id } });
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const handleAddblog = async (req, res, next) => {
  const { title, start_date, end_date, describtion, type } = req.body;

  try {
    res.json({ success: "success" });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
export const handleEditblog = async (req, res, next) => {
  const { title, start_date, end_date, describtion, type } = req.body;

  try {
    res.json({
      success: "success",
      title,
      start_date,
      end_date,
      describtion,
      type,
    });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
export const handleToggleblog = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
export const handleDeleteblog = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
