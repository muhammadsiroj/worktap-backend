import { Router } from "express";
import { findJob, getJob, postJob } from "../controllers/job.controller.js";
import { upload } from "../utils/multer.js";
import { checkToken } from "../middlewares/checkToken.middlewares.js";

export const jobRouter = Router();

jobRouter.post('/jobs/:id',checkToken,upload.single('image'),postJob)
jobRouter.get('/jobs/:id',getJob)
jobRouter.get('/job/:id',findJob) 