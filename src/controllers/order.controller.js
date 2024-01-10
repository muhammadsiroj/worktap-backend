import { Op } from "sequelize";
import Order from "../models/order.model.js";
import User from "../models/auth.model.js";
import Category from "../models/category.model.js";

const postOrder = async (req,res)=>{   
    try {
        const {id} = req.params;
        const getUserById = await User.findOne({where:{id   }})
        const user = getUserById.dataValues;
        const {title,price,deadline,description,categoryId} = req.body;
        const reyting = getUserById.dataValues.reyting;
        await Order.create({
            title,
            price,
            image: req.file.filename,
            deadline, 
            description,
            categoryId,
            userId:id,
            username:getUserById.dataValues.name,
            user_image:getUserById.dataValues.image,
            user_reyting:reyting
        }) 
        res.status(201).json('created')
    } catch (error) {
        console.log(error);
    }
}
const getOrder = async (req,res)=>{
    const {id} = req.params;
    const {max,min} = req.query;
     if (max == '' || min == '') {
        return res.status(400).json({msg:"bad request"})
    }else  if (!max && !min ) {
        const getOrder = await Order.findAndCountAll({where:{userId:id}})
        res.status(200).json({data:getOrder})
    }else{
        const getOrder = await Order.findAndCountAll({  
            where:{
                userId:id,
                price: {
                    [Op.between]: [min,max ]
                }
            }
        })
        res.status(200).json({data:getOrder})  
    }
} 

const findOrder = async (req,res)=>{
    const {id} = req.params;
    const {title} = req.query;
    try {
    if (title) { 
        const category = await Category.findOne({where:{title}})
        const cate = category.dataValues.id;
        const order = await Order.findAll({
            where:{
                userId:id,
                categoryId:cate
            }
        })
        return res.status(200).json({data:order})
    }
    const order = await Order.findAll({
        where:{
            userId:id
        }
    })
    res.status(200).json({data:order})
    
   } catch (error) {
    console.log(error);
   }
} 

export{
    getOrder,
    findOrder,
    postOrder
}