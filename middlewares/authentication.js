import jwt from "jsonwebtoken";


const authentication = (req, res, next)=>{
    const token = req.header['authentication']
    console.log("Token: ", token)
    next();
}

// jwt.verify(token, 'shhhhh', function(err, decoded) {
//     console.log(decoded.foo) // bar
//   });
  

export default authentication;