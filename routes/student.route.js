import {Router} from "express";
import { createStudent, getStudent } from "../services/student.services.js";
import { checkPermission } from "../middlewares/authorization.js";

const router = Router()

router.post(
    "/",checkPermission("create-user"),async (req,res)=>{
    try{
        const result = await createStudent(req);
        res.send(result)
    }catch(error){
        console.log("Error: ", error)
        res.send({
            message:"Error Occured",
            error:error
        });
    }
})

router.get("/",checkPermission("read-user"),async (req,res)=>{
    try{
        const result = await getStudent(req);
        res.send(result)
    }catch(error){
        console.log("Error: ", error)
        res.json({
            message:"Error Occured",
            error:error
        });
    }
})




export default router;