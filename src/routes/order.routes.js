import { Router } from "express";
import { findOrder, getOrder, postOrder } from "../controllers/order.controller.js";
import { upload } from "../utils/multer.js";

export const orderRoute = Router();

orderRoute.get('/order/:id',getOrder)
orderRoute.get('/orders/:id/',findOrder)
orderRoute.post('/order/:id',upload.single('image'),postOrder)