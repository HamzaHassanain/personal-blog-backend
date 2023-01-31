import validator from "validator";
import { AuthError, NotFoundError } from "../utils/ErrorResponse.mjs";
import bcrypt from "bcrypt";

import userModel from "../models/user.model.mjs";
import Debug from "../utils/Debug.mjs";
export async function validateSignupData(req, res, next) {
  const { email, name, password } = req.body;

  Debug.info(req.body);

  try {
    const errors = buildErrors(email, name, password);

    if (errors.email || errors.name || errors.password)
      throw new AuthError("", errors);

    const salt = await bcrypt.genSalt();
    const encrypted_password = await bcrypt.hash(password, salt);

    const user_create_data = {
      encrypted_password,
      email,
      name,
    };
    req.user_create_data = user_create_data;
    next();
  } catch (error) {
    next(error);
  }
}
export async function validateLoginData(req, res, next) {
  const { email, password } = req.body;
  try {
    const errors = buildErrors(email, "", password);

    if (errors.email || errors.password) throw new AuthError("", errors);

    req.uesr_login_data = { email, password };
    next();
  } catch (error) {
    next(error);
  }
}

function buildErrors(email, name, password) {
  const errors = {};
  if (!validator.isEmail(email || ""))
    errors.email = "The email you entered is invalid or no email";
  if (!password || password.length < 6)
    errors.password =
      "The password you entered is invalid , password must be minimum of 6 characters";
  if (!name || name.length < 6)
    errors.name =
      "The name you entered is invalid, name must be minimum of 6 characters";

  return errors;
}
