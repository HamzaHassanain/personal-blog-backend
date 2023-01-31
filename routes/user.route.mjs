import { Router } from "express";
import {
  updateUserController,
  deleteUserController,
} from "../controllers/user.controller.mjs";
import { verifyToken } from "../middlewares/verifyToken.mjs";
const router = Router();

router.put("/update", verifyToken, updateUserController);
router.delete("/delete", verifyToken, deleteUserController);

export default router;
