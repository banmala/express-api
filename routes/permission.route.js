import {Router} from "express";
import 'dotenv/config.js'
import {createPermission} from "../services/permission.services.js"
const router = Router()

router.post("/",(req,res)=>{
    try{
        res.send(createPermission(req))
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

export default router;