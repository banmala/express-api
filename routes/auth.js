import {Router} from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config.js'

const router = Router()

// post /api/auth/login
router.post("/login",(req,res)=>{
    const {email, password} = req.body
    const secretcode = process.env.jwtsecretcode

    if(email == "admin@gmail.com" && password.length>8){
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), //1 hour
            data: {
                email: email,
            }
          },secretcode);
        res.status(200).json({token:token,message:"Successfully Signed In!"});
    }else{
        next("Email or password error");
    }
    res.send("Hello from login");
})

// post /api/auth/register
router.post("/register",(req,res)=>{
    res.end("Hello from register");
})

// post /api/auth/forgetPassword
router.post("/forgetPassword",(req,res)=>{
    res.end("Hello from Forget Password");
})

export default router;