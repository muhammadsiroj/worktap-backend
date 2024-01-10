import Job from "../models/jobs.model.js";

export const getWork = async (req,res) =>{
    try {
        const {page,limit} = req.query;
        if(!page && !limit){
            const getJob = await Job.findAll()
            res.status(200).json({data:getJob});
            return
 
        }
        const offset = (page - 1) * limit;
        const getJob = await Job.findAll({
            limit,
            offset
        });
        if(!getJob){
            res.status(404).json({msg:'Job is not found'})
            return
        }
        res.status(200).json({data:getJob})
    } catch (error) {
        res.status(500).json({msg:error.message})

         
    }
}

export const findWork = async (req,res) =>{

    const {id} = req.params;
    const findwork = await Job.findAll({where:{id}});
    res.status(200).json({data:findwork})
}