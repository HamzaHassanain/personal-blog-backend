import Debug from "../utils/Debug.mjs";
import Blog from "../models/blog.model.mjs";
import { types } from "../utils/consts.mjs";
import { v2 as cloudinary } from "cloudinary";
const MAIN_PAGE = "index";

export const getDashboardPage = async (req, res, next) => {
  try {
    const [data, links] = await Promise.all([
      Blog.findOne({ type: types.dashboard }),
      Blog.find({ type: types.link }),
    ]);

    res.render(MAIN_PAGE, { err: null, data, links });
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleEditDashboard = async (req, res, next) => {
  const { title, describtion } = req.body;

  let dashboard;
  try {
    dashboard = await Blog.findOne({ type: types.dashboard });
    if (!dashboard) {
      dashboard = new Blog({ type: types.dashboard });
    }
    Debug.info(dashboard);
    dashboard.title = title;
    dashboard.describtion = describtion;
    await dashboard.save();
    res.redirect("/admin/dashboard");
    next();
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
export const handleDashboardUploadImage = async (req, res, next) => {
  let dashboard;
  try {
    dashboard = await Blog.findOne({ type: types.dashboard });
    if (!dashboard) {
      dashboard = new Blog({ type: types.dashboard });
    }
    dashboard?.image?.id &&
      (await cloudinary.uploader.destroy(dashboard.image.id));

    dashboard.image.url = req.file.path;
    dashboard.image.id = req.file.filename;
    await dashboard.save();
    res.redirect("/admin/dashboard");
    next();
  } catch (error) {
    error.page = MAIN_PAGE;
    next(error);
  }
};
// {"fieldname":"image","originalname":"light.png","encoding":"7bit","mimetype":"image/png","path":"https://res.cloudinary.com/djf8tqwvs/image/upload/v1675594526/hamzahassanain.xyz/tj4opirwjzaxkebqweoq.png","size":11835,"filename":"hamzahassanain.xyz/tj4opirwjzaxkebqweoq"}
