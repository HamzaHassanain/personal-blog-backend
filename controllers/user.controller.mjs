import { createToken } from "../utils/jwt.mjs";
import userModel from "../models/user.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";

export const updateUserController = async (req, res, next) => {
  const { name } = req.body;
  const [type, token] = req.headers.authorization?.split(" ");
  try {
    if (name && name.length >= 6) {
      const user = await userModel.findOne({ email: req.user.email });
      if (!user) throw new AuthError("User Does Not Exist ");
      user.name = name;
      await user.save();
      req.user.name = name;
      const response = new SuccessResponse({ ...req.user, token });
      res.json(response);
    } else
      throw new AuthError("Cannot update name!", {
        name: "The name you entered is invalid, name must be minimum of 6 characters",
      });
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    await userModel.findOneAndDelete({ email: req.user.email });
    const response = new SuccessResponse(
      {},
      200,
      `User with email  ${req.user.email} deleted`
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
};
