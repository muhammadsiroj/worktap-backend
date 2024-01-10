import { Sequelize } from "sequelize";
import User from "../models/auth.model.js";
import Review from "../models/review.model.js";
import { CountReyting } from "../utils/reyting.js";

export const postReview = async (req,res) =>{
    try {
        const {id} = req.params;
        const {reyting,description, userId} = req.body;
        if(reyting > 5){
            res.status(401).json({msg:"invalid reyting"})
            return
        }
        const findUser = await User.findOne({where:{id}});
        if(!findUser){
            res.status(404).json({msg:"User is not found"})
            return
        } 
        const {name,image} = findUser.dataValues;

        const oldReyting = findUser.dataValues.reyting; 
        const newReyting = CountReyting(oldReyting,reyting) 
        async function updateUsers( newData) { 
            try {
               await User.update(newData, {where: {id:userId}});
            } catch (error) {
              console.error('Error updating users:', error.message);
            }
          }
          const newData = {
            reyting:newReyting
          }
          updateUsers(newData)

        await Review.create({
            name,
            image,
            reyting,
            description,
            userId
        })
        res.status(201).json({msg:"Created"})
    } catch (error) {
        res.status(500).json({msg:error.message})
         
    }
    
    
}

export const getReview = async (req,res) =>{
    try {
        const {id} = req.params;
        const findReview = await Review.findAll({where:{userId:id}});
        if(!findReview){
            res.status(404).json({msg:"review not found"})
            return
        }
    
        res.status(200).json({data:findReview})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}

export const findReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { num ,page,limit } = req.query;

        const offset = (page - 1) * limit;


        if (!num) {
            return res.status(400).json({ msg: "error" });
        }
        if (!page & !limit) {
            
            
            let findReview;

        if (num > 3 ) {
            findReview = await Review.findAndCountAll({
                where: {
                    reyting: {
                        [Sequelize.Op.gt]: 3,
                    },
                    userId: id,
                },
            });
        } else if (num <=3) {
            findReview = await Review.findAndCountAll({
                where: {
                    reyting: {
                        [Sequelize.Op.lte]: 3,
                    },
                    userId: id,
                },
            });
        } else {
            return res.status(400).json({ msg: "Invalid value for 'num'" });
        }

        if (findReview.length === 0) {
            return res.status(404).json({ msg: "Review is not found" });
        }

        return res.status(200).json({ data: findReview });
    }else{

        let findReview;

        if (num > 3 ) {
            findReview = await Review.findAndCountAll({
                where: {
                    reyting: {
                        [Sequelize.Op.gt]: 3,
                    },
                    userId: id,
                },
                offset,
                limit
            });
        } else if (num <=3) {
            findReview = await Review.findAndCountAll({
                where: {
                    reyting: {
                        [Sequelize.Op.lte]: 3,
                    },
                    userId: id,
                },
                offset,
                limit
            });
        } else {
            return res.status(400).json({ msg: "Invalid value for 'num'" });
        }

        if (findReview.length === 0) {
            return res.status(404).json({ msg: "Review is not found" });
        }

        return res.status(200).json({ data: findReview });
    }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


