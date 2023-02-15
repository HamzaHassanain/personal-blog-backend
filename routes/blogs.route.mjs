import { Router } from "express";

import {
  getblogsPage,
  getNewblogPage,
  getEditblogsPage,
  handleAddblog,
  handleEditblog,
  handlePublishblog,
  handleUnPublishblog,
  handleDeleteblog,
  handleBlogUploadImage,
} from "../controllers/blogs.controller.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";
import parser from "../middlewares/fileUpload.mjs";

const router = Router();

router.get("/", authorizeAdmin, getblogsPage);
router.get("/new", authorizeAdmin, getNewblogPage);
router.get("/edit/:id", authorizeAdmin, getEditblogsPage);

router.post("/new", authorizeAdmin, handleAddblog);
router.put("/edit/:id", authorizeAdmin, handleEditblog);
router.post("/publish/:id", authorizeAdmin, handlePublishblog);
router.post("/un-publish/:id", authorizeAdmin, handleUnPublishblog);
router.delete("/delete/:id", authorizeAdmin, handleDeleteblog);
router.post(
  "/upload/:id",
  authorizeAdmin,
  parser.single("image-upload"),
  handleBlogUploadImage
);

export default router;
