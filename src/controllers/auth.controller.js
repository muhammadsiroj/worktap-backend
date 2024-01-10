import User from "../models/auth.model.js";
import {sign} from '../utils/jwt.js'
import { comped, hashed } from "../utils/bcrypt.js";
import Review from "../models/review.model.js";

export const Login = async (req,res) =>{
    try {
            const {email,password} = req.body; 
            const user = await User.findOne({where:{email}});
            const pass = comped(password,user.password)
            if(!user || pass == false){
                return res.status(404).json('email or password incorrect')
            }
            const token = sign({email})
            return res.status(201).json({token:token,id:user.id})
    } catch (error) {
        res.status(500).json({msg:error.message})
         
    }
    
}


export const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const {name,lastname, address, certificate, education, language ,who,description  } = req.body;

        const user = await User.findOne({ where: { id } });

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const updatedUser = await User.update(
            {
                name: name ? name :user.dataValues.name,
                lastname:lastname ? lastname :user.dataValues.lastname,
                address:address ? address :user.dataValues.address,
                certificate:certificate ? certificate :user.dataValues.certificate,
                education:education ? education :user.dataValues.education,
                image: req.file ? req.file.filename : user.dataValues.image , 
                language:language ? language :user.dataValues.language,
                who:who ? who :user.dataValues.who,
                description:description ? description :user.dataValues.description
            },
            { where: { id } }
        );
         await Review.update({
            image:req.file ? req.file.filename : user.dataValues.image 
        },
        {
            where:{id}
        })


        return res.status(200).json({ data: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};



export const Register = async (req,res) =>{
    try {
        const {name,surname,email,password,role,who, address, time, education, language, certificate,description} = req.body;
        const findUser = await User.findOne({where:{email}});
            if (findUser) {
                return res.status(409).json("user is already exist")
            }
            const hash = hashed(password);
            const user = await User.create({
                name, 
                lastname:surname,
                email,
                password:hash,
                role,
                who,
                address,
                time,
                education,
                language,
                certificate,
                description
            })
            const token = sign({email,role})

            res.status(201).json({token:token,id:user.id})
    } catch (error) {
        console.error(error.message);
        
    }   
}