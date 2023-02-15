import { Router } from "express";

import {
  handleUploadImage,
  getImagesPage,
  handleDeleteImage,
} from "../controllers/image.controller.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";
import parser from "../middlewares/fileUpload.mjs";

const router = Router();

router.get("/", authorizeAdmin, getImagesPage);

router.post(
  "/upload/",
  authorizeAdmin,
  parser.single("image"),
  handleUploadImage
);
router.delete("/delete/:id", authorizeAdmin, handleDeleteImage);

export default router;
