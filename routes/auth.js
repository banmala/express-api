import {Router} from "express";


const router = Router()

// post /api/auth/login
router.post("/login",(req,res)=>{
    res.end("Hello from login");
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