import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import userModel from "../models/user.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";

export const signupController = async (req, res, next) => {
  try {
    const prevUser = await userModel.findOne({
      email: req.user_create_data.email,
    });
    if (prevUser)
      throw new AuthError("Already exsist error", { email: "Email is used" });
    const userData = req.user_create_data;

    await userModel.create(userData);
    delete userData.encrypted_password;
    const user = { ...userData };
    const token = createToken(user);
    const response = new SuccessResponse({ user: { ...user, token } });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const errors = [
  "Invalid Login user or password not match",
  {
    email: "Email not possibly not exsist",
    password: "Password not possibly not exsist",
  },
];
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.uesr_login_data;
    const user = await userModel.findOne({ email });
    if (!user) throw new AuthError(...errors);
    const valid = await user.compare(password);
    if (!valid) throw new AuthError(...errors);
    const token = createToken({ email: user.email, name: user.name });
    const response = new SuccessResponse({
      user: { email: user.email, name: user.name, token },
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};
