import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import userModel from "../models/user.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";

const admin_name = process.env.ADMIN_NAME;
const admin_password = process.env.ADMIN_PASSWORD;

const errors = [
  "Invalid Login user or password not match",
  {
    email: "Email not possibly not exsist",
    password: "Password not possibly not exsist",
  },
];
export const getLoginController = async (req, res, next) => {
  try {
    res.render("login");
  } catch (error) {
    Debug.error("Error at >>", "getLoginController", " << ", error);
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
      if (err) next(err);
      req.session.is_valid = "true";
      req.session.save((err) => {
        if (err) next(err);
        res.redirect("/");
      });
    });
  } catch (error) {
    Debug.error("Error at >>", "postLoginController", " << ", error);
    next(error);
  }
};
