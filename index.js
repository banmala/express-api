import express from "express";
import morgan from "morgan"
import cors from "cors"

const app = express()

app.use(express.json())


app.use(morgan("dev"))
// app.use(cors())



const corsOptions = {
    origin: '*', // Allow only requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

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

//middlewares have access to req.body ko data
app.use(function (req,res,next){
    const data = req.body
    console.log("data: ", data)
    req.body = {
        ...req.body,
        age: 50
    }
    next();
})

app.get("/test",(req,res)=>{
    res.end("Response from test endpoint")
})

app.get("/",(req,res)=>{
    res.end("response from main endpoint")
})

app.post("/",(req,res)=>{
    res.end("response from post request")
})

app.post("/login",(req,res)=>{
    console.log("req=> body at login : ", req.body)
    res.end("response from login")
})

// app.post("/login",(req,res)=>{
//     const{email, password} =req.body
//     //email exist
//     //password correct
//     //token generate => return 

//     res.end("From Login")
// })

// app.get("/student",()=>{
//     //get token
//     //token decrypt
//     //

//     //database => get info
//     //sanitize info
//     // return info
// })

// const router = express.Router();

// // Router-level middleware
// router.use((req, res, next) => {
//   console.log('Router-level middleware executed');
//   next();
// });

// router.get('/test', (req, res) => {
//   res.send('Router-level middleware example');
// });

// app.use('/api', router); // Mount the router on the '/api' path

app.listen(3005,(err)=>{
    if(err){
        console.log("Error running the server: ", err);
    }
    console.log("Server is listening at port 3005")
})