import { Router } from "express";
import {
  postLoginController,
  getLoginController,
} from "../controllers/auth.controller.mjs";

import authorizeAdmin from "../middlewares/authorizeAdmin.mjs";
const router = Router();

router.get("/login", getLoginController);
router.post("/login", postLoginController);

export default router;
