import {Router} from "express";
import testMiddleware from "../middlewares/test-middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const router = Router()


// router.use(authMiddleware)

router.get("/", (req,res)=>{
    
    res.send("List of students")
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id
    console.log("id: ",id)
    res.end("Deleted student of rid:"+id)
})

router.post("/",async (req,res)=>{
    // const student = await prisma.user.create({data:{name:"Sunil", email:"banmala@gmail.com"}})
    res.send("Created new student")
})

export default router;