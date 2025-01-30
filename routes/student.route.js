import {Router} from "express";
import { createStudent, getStudent } from "../services/student.services.js";

const router = Router()

router.post("/",async (req,res)=>{
    try{
        const result = await createStudent(req);
        res.send(result)
    }catch(error){
        console.log("Error: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.get("/",async (req,res)=>{
    try{
        const result = await getStudent(req);
        res.send(result)
    }catch(error){
        console.log("Error: ", error)
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})




export default router;