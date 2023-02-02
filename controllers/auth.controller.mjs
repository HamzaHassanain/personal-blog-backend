import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import userModel from "../models/blog.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";

const admin_name = process.env.ADMIN_NAME;
const admin_password = process.env.ADMIN_PASSWORD;
const PAGE = "login";
export const getLoginController = async (req, res, next) => {
  try {
    res.render(PAGE, { err: null });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const postLoginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!(username === admin_name) || !(password === admin_password))
      throw new AuthError("Admin name or password are false");
    // Debug.info(password, username);
    // const response = new SuccessResponse({
    //   username,
    //   password,
    // });
    req.session.regenerate((err) => {
      if (err) throw err;
      req.session.is_valid = "true";
      req.session.save((err) => {
        if (err) throw err;
        res.redirect("/admin/");
      });
    });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
