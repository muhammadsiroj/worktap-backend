import { verify } from "../utils/jwt.js";

export const checkToken = (req,res,next) => {
    const {token} = req.headers;
    const check = verify(token);
    if(check.role == "work"){
        res.status(401).json({msg:"you don't create"})
        return
    }
    if (!check) {
        res.status(400).json({msg:"No Token"})
        return
    } 
    next() 
}