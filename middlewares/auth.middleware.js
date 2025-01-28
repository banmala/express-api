import "dotenv/config.js"
import jwt from 'jsonwebtoken'

export default (req, res, next)=>{
    const authToken = req.headers.authorization
    const token = authToken.split(" ")[1]
    console.log("token: ", token)
    let decoded = jwt.verify(token, process.env.jwtsecretcode);
    console.log("Decoded: ", decoded)
    const {email} = decoded.data
    if(email=="admin@gmail.co"){
        next();
    }else{
        next("Email not found")
    }
}