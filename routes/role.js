import {Router} from "express";
import 'dotenv/config.js'
import {createRole} from "../services/role.services.js"
const router = Router()



router.post("/",(req,res)=>{
    try{
        res.send(createRole(req))
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

export default router;