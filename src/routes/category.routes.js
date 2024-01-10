import { Router } from "express";
import { getCategory, postCategory, searchCategory } from "../controllers/category.controller.js";

export const categoryRouter = Router();

categoryRouter.post('/category',postCategory)
categoryRouter.get('/categories',getCategory) 
categoryRouter.get('/category',searchCategory) 