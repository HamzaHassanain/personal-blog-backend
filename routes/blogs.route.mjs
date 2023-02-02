import { Router } from "express";

import {
  getblogsPage,
  getNewblogPage,
  getEditblogsPage,
  handleAddblog,
  handleEditblog,
  handleToggleblog,
  handleDeleteblog,
} from "../controllers/blogs.controller.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";

const router = Router();

router.get("/", authorizeAdmin, getblogsPage);
router.get("/new", authorizeAdmin, getNewblogPage);
router.get("/edit/:id", authorizeAdmin, getEditblogsPage);

router.post("/new", authorizeAdmin, handleAddblog);
router.put("/edit/:id", authorizeAdmin, handleEditblog);
router.put("/toggle/:id", authorizeAdmin, handleToggleblog);
router.delete("/delete/:id", authorizeAdmin, handleDeleteblog);

// router.get("/projects", authorizeAdmin, getAdminProjects);
// router.get("/projects/edit:id", authorizeAdmin, getAdminEditProjects);
// router.post("/projects/new", authorizeAdmin, addAdminProject);
// router.put("/projects/edit", authorizeAdmin, editAdminProject);
// router.put("/projects/toggle", authorizeAdmin, toggleAdminProject);
// router.delete("/projects/delete", authorizeAdmin, deleteAdminProject);

export default router;
