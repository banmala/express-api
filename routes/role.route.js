import {Router} from "express";
import 'dotenv/config.js'
import {createRole, getAllRoles,deleteRoleById, getRoleById, updateRoleById} from "../services/role.services.js"
const router = Router()



router.post("/",(req,res)=>{
    try{
        const result = createRole(req);
        res.send(result)
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.get("/",async (req,res)=>{
    try{
        const result = await getAllRoles(req);
        res.send(result)
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.patch("/:id",async (req,res)=>{
    try{
        const result = await updateRoleById(req);
        res.send(result)
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.get("/:id",(req,res)=>{
    try{
        const result = getRoleById(req);
        res.send(result)
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})

router.delete("/:id",(req,res)=>{
    try{
        const result = deleteRoleById(req);
        res.send(result)
    }catch(error){
        res.status(400).send({
            message:"Error Occured",
            error:error
        });
    }
})



// router.get("/:id",async (req,res)=>{
//     try{
//         const result = await getRole(req);
//         res.send(result);
//     }catch(error){
//         res.status(400).send({
//             message:"Error Occured",
//             error:error
//         });
//     }
// })


// router.patch("/:id",async (req,res)=>{
//     try{
//         const result = await updateRole(req);
//         res.send(result);
//     }catch(error){
//         console.log("error: ", error)
//         res.status(400).send({
//             message:"Error Occured",
//             error:error
//         });
//     }
// })


export default router;