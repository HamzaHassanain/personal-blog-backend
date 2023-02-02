import { Router } from "express";

import {
  getExperiencesPage,
  getNewExperiencePage,
  getEditExperiencesPage,
  handleAddExperience,
  handleEditExperience,
  handleToggleExperience,
  handleDeleteExperience,
} from "../controllers/experiences.controller.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";

const router = Router();

router.get("/", authorizeAdmin, getExperiencesPage);
router.get("/new", authorizeAdmin, getNewExperiencePage);
router.get("/edit/:id", authorizeAdmin, getEditExperiencesPage);

router.post("/new", authorizeAdmin, handleAddExperience);
router.put("/edit/:id", authorizeAdmin, handleEditExperience);
router.put("/toggle/:id", authorizeAdmin, handleToggleExperience);
router.delete("/delete/:id", authorizeAdmin, handleDeleteExperience);

// router.get("/projects", authorizeAdmin, getAdminProjects);
// router.get("/projects/edit:id", authorizeAdmin, getAdminEditProjects);
// router.post("/projects/new", authorizeAdmin, addAdminProject);
// router.put("/projects/edit", authorizeAdmin, editAdminProject);
// router.put("/projects/toggle", authorizeAdmin, toggleAdminProject);
// router.delete("/projects/delete", authorizeAdmin, deleteAdminProject);

export default router;
