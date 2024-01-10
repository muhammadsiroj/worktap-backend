import express from 'express';
import cors from 'cors'
import sequelize from './utils/sequelize.js';
import { authRouter } from './routes/auth.routes.js';
import { workRouter } from './routes/work.routes.js';
import { jobRouter } from './routes/jobs.routes.js';
import { categoryRouter } from './routes/category.routes.js';
import { reviewRouter } from './routes/review.routes.js';
import path from "path";
import './utils/connect.js'
import { UserRouter } from './routes/user.routes.js';
import { orderRoute } from './routes/order.routes.js';
function start(){ 
    const app = express();
    app.use(express.json())
    app.use(express.static(path.join(path.resolve(),'uploads'))) 
    sequelize.sync();
    app.use(cors()) 
    app.use(authRouter)
    app.use(jobRouter)
    app.use(categoryRouter)
    app.use(reviewRouter)
    app.use(workRouter)
    app.use(UserRouter)
    app.use(orderRoute)
    app.listen(4000,()=>console.log("running..."))
}
start()  