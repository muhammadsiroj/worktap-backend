import { Sequelize } from "sequelize";
import User from "../models/auth.model.js";

export const getUser = async (req,res) =>{
    try {
        const {page,limit} = req.query;
        if(!page && !limit){
            const getUser = await User.findAll({
                where: {
                    reyting: {
                      [Sequelize.Op.gt]: 3.9,
                    },
                  },
            })
            res.status(200).json({data:getUser});
            return
        }
        const offset = (page - 1) * limit;
        const getUser = await User.findAll({
            limit,
            offset,
            where: {
              reyting: {
                [Sequelize.Op.gte]: 3.9,
              },
            },
          })
        if(!getUser){
            res.status(404).json({msg:'User is not found'})
            return
        }
        res.status(200).json({data:getUser})
    } catch (error) {  
        res.status(500).json({msg:error.message})

         
    }
}

export const findUser = async (req,res)=>{
  const {id} = req.params;
  const user = await User.findAll({where:{id}})
  if(!user){
    res.status(404).json({msg:"user is not found"})
    return
  }
  res.status(200).json({data:user})
}