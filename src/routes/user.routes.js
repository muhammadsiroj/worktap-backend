import { Router } from "express";
import { findUser, getUser } from "../controllers/user.controller.js";

export const UserRouter = Router();

UserRouter.get('/users',getUser) 
UserRouter.get('/user/:id',findUser) 