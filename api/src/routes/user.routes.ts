import { Router } from "express";
import { register, login } from "../controllers/users.controller";

const router = Router();

router.post("/register", register);
router.post("/", login);

export default router;
