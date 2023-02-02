import { Router } from "express";

import {
  getExperiences,
  getEditExperiences,
  addExperience,
  editExperience,
  toggleExperience,
  deleteExperience,
} from "../controllers/experiences.controller.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";

const router = Router();

router.get("/", authorizeAdmin, getExperiences);
router.post("/new", authorizeAdmin, getEditExperiences);
router.get("/edit/:id", authorizeAdmin, addExperience);
router.put("/edit:id", authorizeAdmin, editExperience);
router.put("/toggle:id", authorizeAdmin, toggleExperience);
router.delete("/delete:id", authorizeAdmin, deleteExperience);

// router.get("/projects", authorizeAdmin, getAdminProjects);
// router.get("/projects/edit:id", authorizeAdmin, getAdminEditProjects);
// router.post("/projects/new", authorizeAdmin, addAdminProject);
// router.put("/projects/edit", authorizeAdmin, editAdminProject);
// router.put("/projects/toggle", authorizeAdmin, toggleAdminProject);
// router.delete("/projects/delete", authorizeAdmin, deleteAdminProject);

export default router;
