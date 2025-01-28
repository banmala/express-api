const testMiddleware = (req,res,next)=>{
    console.log("Test Middleware from ./middleware folder");
    // next("Testing error handling middleware");
    next()
}

export default testMiddleware