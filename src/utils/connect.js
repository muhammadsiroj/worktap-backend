import Category from "../models/category.model.js";
import User from "../models/auth.model.js";
import Job from "../models/jobs.model.js";
import Review from "../models/review.model.js";
import Order from "../models/order.model.js";

// connect Job to User
User.hasMany(Job); 
Job.belongsTo(User);

// connect Job to Category
Category.hasMany(Job);
Job.belongsTo( Category);

// connect Order to Category
Category.hasMany(Order);
Order.belongsTo( Category);

//connect Review to User
User.hasMany(Review);
Review.belongsTo(User);

//connect Order to User
User.hasMany(Order);
Order.belongsTo(User);