import { Router } from "express";
import { getReview, postReview,findReview } from "../controllers/review.controller.js";
import { checkToken } from "../middlewares/checkToken.middlewares.js";

export const reviewRouter= Router();

reviewRouter.get('/reviews/:id',getReview)
reviewRouter.get('/review/:id',findReview) 
reviewRouter.post('/review/:id',checkToken,postReview)  