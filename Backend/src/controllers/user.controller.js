import userModel from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Missing Credentials",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User Already Exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);

    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.json({
      success: true,
      message: "User Registered Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({
                success:false,
                message:"Missing Credentials"
            })
          }

         const user = await userModel.findOne({email});
         
         if(!user){
            return res.json({
              success:false,
              message:"User Not Found!"
            })
         }
          const isPasswordCorrect = await bcrypt.compare(password,user.password);

          if(!isPasswordCorrect){
            return res.json({
              success:false,
              message:"Wrong Password"
            })
          }

          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

          return res.json({
            success:true,
            message:"User Registered Successfully",
            token,
            user
          })
        }
     catch (error) {
        console.log(err); 
        res.json({
          success:false,
          message:error.message
        })
  }

};

const getUserCredits = async (req,res)=> {
    try {
      const {userId} = req.body;

      const user = await userModel.findById(userId);
      res.json({
        success:true,
        credits:user.creditBalance,
        user:{name:user.name}
      })
    } catch (error) {
      console.log(error); 
      res.json({
        success:false,
        message:error.message
      })

    }
}

export {registerUser,loginUser,getUserCredits};
