import express from "express";
import morgan from "morgan"
import cors from "cors"
import appRouter from "./routes/index.js"

const app = express()

const router = express.Router()

app.use(express.json())


app.use(morgan("dev"))
// app.use(cors())



const corsOptions = {
    origin: '*', // Allow only requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


// app.get("/test",(req,res)=>{
//     res.end("Response from test endpoint")
// })

app.use((req, res, next)=>{
    console.log("This is applicaiton level middleware")
    next();
})

//authentication
app.use((req, res, next)=>{
    let isLoggedIn = true;
    if(isLoggedIn){
        next();
    }else{
        res.end("I have access to response cycle.")
    }
})

//authorization
app.use((req, res, next)=>{
    let isAdmin = true;
    if(isAdmin){
        next();
    }else{
        res.end("Only admins are allowded to enter")
    }
})

//middlewares have access to req.body ko data and can update req object
app.use(function (req,res,next){
    const data = req.body
    console.log("data: ", data)
    req.body = {
        ...req.body,
        age: 50
    }
    next();
})

app.use("/api",appRouter)

//Query and params
app.get("/testquery/:id",(req,res)=>{
    const params = req.params
    const query = req.query
    console.log("Params: ", params)
    console.log("Query: ", query)

    res.end("return from query testig")
})

// //authentication and authorization 
// app.use((req, res, next)=>{
//     let isLoggedIn = true;
//     if(isLoggedIn){
//         next();
//     }else{
//         res.end("I have access to response cycle.")
//     }
// },(req, res, next)=>{
//     let isAdmin = true;
//     if(isAdmin){
//         next();
//     }else{
//         res.end("Only admins are allowded to enter")
//     }
// })




app.get("/",(req,res)=>{
    res.end("response from main endpoint")
})

// app.post("/",(req,res)=>{
//     console.log("body at / endpoint: ", req.body)
//     res.end("response from post request")
// })



// app.post("/login",(req,res)=>{
//     console.log("req=> body at login : ", req.body)
//     res.end("response from login")
// })



// // Router-level middleware
// router.use((req, res, next) => {
//   console.log('Router-level middleware executed');
//   next();
// });

// router.get('/test', (req, res) => {
//     res.send('Router-level middleware example');
// });
// router.get('/test/ing', (req, res) => {
//     res.send('Router-level middleware example testign ');
// });
// router.post('/test',(req,res)=>{
//     res.send("POst request to /test endpoint")
// })

// app.use('/api', router); // Mount the router on the '/api' path

app.listen(3005,(err)=>{
    if(err){
        console.log("Error running the server: ", err);
    }
    console.log("Server is listening at port 3005")
})

//query and params