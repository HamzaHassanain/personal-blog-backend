import { Router } from "express";

import {
  getDashboardPage,
  handleEditDashboard,
  handleUploadImage,
  //   handleDeleteblog,
} from "../controllers/dashboard.controller.mjs";
import parser from "../utils/fileUpload.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";

const router = Router();

router.get("/", authorizeAdmin, getDashboardPage);

router.put("/edit/", authorizeAdmin, handleEditDashboard);

router.post(
  "/upload",
  authorizeAdmin,
  parser.single("image"),
  (req, res, next) => {
    res.json(req.file);
  }
);
// router.get("/projects", authorizeAdmin, getAdminProjects);
// router.get("/projects/edit:id", authorizeAdmin, getAdminEditProjects);
// router.post("/projects/new", authorizeAdmin, addAdminProject);
// router.put("/projects/edit", authorizeAdmin, editAdminProject);
// router.put("/projects/toggle", authorizeAdmin, toggleAdminProject);
// router.delete("/projects/delete", authorizeAdmin, deleteAdminProject);

export default router;
