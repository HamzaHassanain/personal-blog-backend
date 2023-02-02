import Debug from "../utils/Debug.mjs";
import { createToken } from "../utils/jwt.mjs";
import itemModel from "../models/item.model.mjs";
import { SuccessResponse } from "../utils/successResponse.mjs";
import { AuthError } from "../utils/ErrorResponse.mjs";
import { types } from "../utils/consts.mjs";

const MAIN_PAGE = "experiences";
const EDIT_PAGE = "edit_experiences";

export const getExperiencesPage = async (req, res, next) => {
  try {
    const data = await itemModel.find({ type: types.experience });
    res.render(MAIN_PAGE, { err: null, data: [1, 12, 3, "", 4, 5, 5] });
  } catch (error) {
    error.page = PAGE;
    next(error);
  }
};
export const getNewExperiencePage = async (req, res, next) => {
  // const id = req.params.id;
  try {
    res.render(EDIT_PAGE, { err: null, data: null });
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const getEditExperiencesPage = async (req, res, next) => {
  const _id = req.params.id;
  try {
    Debug.info(_id);
    res.render(EDIT_PAGE, { err: null, data: {_id} });
  } catch (error) {
    error.page = EDIT_PAGE;
    next(error);
  }
};
export const handleAddExperience = async (req, res, next) => {
  const { title, start_date, end_date, describtion, type } = req.body;

  try {
    
    res.json({ success: "success" });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
export const handleEditExperience = async (req, res, next) => {
  const { title, start_date, end_date, describtion, type } = req.body;

  try {
    res.json({ success: "success" ,title, start_date, end_date, describtion, type });

  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
export const handleToggleExperience = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
export const handleDeleteExperience = async (req, res, next) => {
  try {
    res.json({ success: "success" });
  } catch (error) {
    // error.page = PAGE;
    next(error);
  }
};
