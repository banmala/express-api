import {Router} from "express";


const router = Router()

router.get("/",(req,res)=>{
    res.send("List of students")
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id
    console.log("id: ",id)
    res.end("Deleted student of id:"+id)
})

router.post("/",(req,res)=>{
    res.send("Created new student")
})

export default router;