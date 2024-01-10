export const checkRole = async (req,res,next)=>{
    const {role,email,password} = req.body;
    if(role !== "work" && role !== "user"){
        res.status(401).json({msg:'Role can only work or user !!!'})
        return
    }
    const checkedEmail = email.toLowerCase().endsWith("@gmail.com");
    if(!checkedEmail){
        res.status(401).json({msg:"Email is invalid"})
        return
    } 
    const checkedPassword = /^[a-zA-Z0-9]+$/.test(password) && password.length >= 8;
    if(!checkedPassword){
        res.status(401).json({msg:"Password is invalid"})
        return
    }
    next()
}