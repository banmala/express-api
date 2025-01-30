import {Router} from "express"
import { createDepartment } from "../services/department.services.js";


const router = Router()

router.post("/",(req,res)=>{
    try{
        const result = createDepartment(req);
        res.send(result)
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

export default router;