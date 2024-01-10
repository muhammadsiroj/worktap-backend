import User from "../models/auth.model.js";
import Job from "../models/jobs.model.js";

export const postJob = async (req,res) =>{
    try {   
        const {title,categoryId,packages, pacDescription, deadline,price,description,subDescription} = req.body;
        const {id} = req.params;

        const findUser = User.findOne({where:{id}}) 
        if(!findUser){
            res.status(404).json({msg:"User is not found"}) 
            return
        }
        const postJob = await Job.create({   
            image:req.file.filename,
            userId:id,
            title,
            categoryId,
            packages, 
            pacDescription, 
            deadline,
            price,
            description,
            subDescription
        })

        res.status(201).json({data:postJob});
    } catch (error) {
        console.error(error);
        
    }
}
export const getJob = async (req,res)=>{
    try {
        const {id} = req.params;
        const {page,limit} = req.query;
        if(!page && !limit){
            const findJob = await Job.findAll({where:{userId:id}});
            res.status(200).json({data:findJob});
            return
 
        }
        const offset = (page - 1) * limit;
        const getJob = await Job.findAll({
            limit,
            offset,
            where:{userId:id}
        }); 
        res.status(200).json({data:getJob})
    } catch (error) { 
        res.status(500).json({msg:error.message})

    }
}

export const findJob = async (req,res)=> {
    try {
        const {id} = req.params;
        const findJob = await Job.findAll({where:{categoryId:id}});
        res.status(200).json({data:findJob})   
    } catch (error) {
        res.status(500).json({msg:error.message})
    
    }
}