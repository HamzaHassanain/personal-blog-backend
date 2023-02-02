import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import userModel from "../models/item.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";

const MAIN_PAGE = "experiences";
const EDIT_PAGE = "edit_experiences";

export const getExperiences = async (req, res, next) => {
  try {
    res.render(MAIN_PAGE, { err: null });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const getEditExperiences = async (req, res, next) => {
  try {
    res.render(EDIT_PAGE, { err: null });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const addExperience = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const editExperience = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const toggleExperience = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const deleteExperience = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
