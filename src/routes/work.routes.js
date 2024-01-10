import { Router } from "express";
import { findWork, getWork } from "../controllers/worker.controller.js";

export const workRouter = Router();

workRouter.get('/works',getWork) 
workRouter.get('/work/:id',findWork) 