import { Router } from "express";

import {
  getDashboardPage,
  handleEditDashboard,
  handleDashboardUploadImage,
} from "../controllers/dashboard.controller.mjs";
import parser from "../middlewares/fileUpload.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";

const router = Router();

router.get("/", authorizeAdmin, getDashboardPage);

router.put("/edit", authorizeAdmin, handleEditDashboard);

router.post(
  "/upload",
  authorizeAdmin,
  parser.single("image"),
  handleDashboardUploadImage
);

export default router;
