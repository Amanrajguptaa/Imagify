import express from "express";
import { getUserCredits, loginUser, registerUser } from "../controllers/user.controller";
import userAuth from "../middlewares/auth.middleware";

const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/credits',userAuth,getUserCredits);
  
export default userRouter