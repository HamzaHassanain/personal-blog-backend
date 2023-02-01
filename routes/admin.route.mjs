import { Router } from "express";
import {
  postLoginController,
  getLoginController,
} from "../controllers/admin.controller.mjs";
import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";
const router = Router();

router.get("/login", getLoginController);
router.post("/login", postLoginController);
router.get("/test", authorizeAdmin, (req, res) =>
  res.render("add_experiences")
);
export default router;
