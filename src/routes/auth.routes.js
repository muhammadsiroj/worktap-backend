import { Router } from "express";
import { Login, Register, Update } from "../controllers/auth.controller.js";
import { checkRole } from "../middlewares/checkRole.middleware.js";
import {upload} from "../utils/multer.js"

export const authRouter = Router();

authRouter.post("/login",Login) 
authRouter.put("/update/:id",upload.single('image'),Update) 
authRouter.post("/register",checkRole,Register) 