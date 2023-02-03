import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import itemModel from "../models/blog.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";
import { types } from "../utils/consts.mjs";

const MAIN_PAGE = "index";
// const EDIT_PAGE = "edit_blogs";

export const getDashboardPage = async (req, res, next) => {
  try {
    // const data = await itemModel.find({ type: types.blog });
    res.render(MAIN_PAGE, { err: null, data: null });
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleEditDashboard = async (req, res, next) => {
  // const id = req.params.id;
  try {
    res.json({ err: null, data: null });
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleUploadImage = async (req, res, next) => {
  //   const _id = req.params.id;
  //   try {
  //     Debug.info(_id);
  //     res.render(EDIT_PAGE, { err: null, data: { _id } });
  //   } catch (error) {
  //     error.page = EDIT_PAGE;
  //     next(error);
  //   }
};
