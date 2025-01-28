import express from "express";
import routers from "./routes/routes.js"

const app = express()
const port = 3005

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello")
    res.end("Hello World from node backend!")
})

app.use("/api",routers)


app.use((error,req,res,next)=>{
    console.log("Error: ", error)
    res.status(404).send({success:false, error:error})
    
})


app.listen(port,(error)=>{
    if(error){
        console.log("Something went wrong. Error: ",error);
    }
    console.log("Server is running at port: ",port);
});