const authorizationMiddleware = (req,res,next)=>{
    const {age} = req.body
    if(age){
        if(age>18){
            next();
        }else{
            res.end("You are not authorized to login")
        }
    }else{
        res.end("Age not provided")
    }
    next();
}

export {authorizationMiddleware};