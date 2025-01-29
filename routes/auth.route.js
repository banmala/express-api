import {Router} from "express";
import { loginService } from "../services/auth.services.js";

const router = Router()

router.post("/login",(req,res)=>{
    try{
        res.send(loginService(req))
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.post("/register",(req,res)=>{
    res.end("Hello from register");
})

router.post("/forgetPassword",(req,res)=>{
    res.end("Hello from Forget Password");
})

export default router;