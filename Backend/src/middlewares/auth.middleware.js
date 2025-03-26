import jwt from "jsonwebtoken";

const userAuth = async(req,res,next)=>{
        const {token} = req.headers;
        if(!token){
            return res.json({
                success:false,
                message:"User Not Authorized"
            })
        }
    try {
        const tokenDecode = 

    } catch (error) {
        
    }
}