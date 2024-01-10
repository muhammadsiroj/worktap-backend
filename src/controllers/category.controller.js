import Category from "../models/category.model.js";

export const postCategory = async (req,res) =>{
    try {
        const {title} = req.body;
        const findCategory = await Category.findOne({where:{title}});
        if(findCategory){
            res.status(401).json({msg:'category is alreadt exist'})
            return
        }
        const postCategory = await Category.create({title})
        res.status(201).json({data:postCategory})
    } catch (error) {
        console.error(error);
        
    }
}

export const getCategory = async (req,res) =>{
    try {
        const {page,limit} = req.query;
        if(!page && !limit){
            const getCategory = await Category.findAll()
            res.status(200).json({data:getCategory});
            return
 
        }
        const offset = (page - 1) * limit;
        const getCategory = await Category.findAll({
            limit,
            offset
        });
        if(!getCategory){
            res.status(404).json({msg:'Category is not found'})
            return
        }
        res.status(200).json({data:getCategory})
    } catch (error) {
        res.status(500).json({msg:error.message})

         
    }
}

export const searchCategory = async (req,res) =>{
    try {
        const {title} = req.query;
        
        const searchCategory = await Category.findAll({where:{title}});
        if(!searchCategory){
            res.status(404).json({msg:'Category is not found'})
            return
        }
        res.status(200).json({data:searchCategory})
    } catch (error) {
        res.status(500).json({msg:error.message})

        
    }
}

