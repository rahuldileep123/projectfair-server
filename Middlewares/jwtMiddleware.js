 const jwt =require('jsonwebtoken')

 const jwtMiddleware=(req,res,next)=>{
    //steps to verify token

    //get token
    console.log("inside JWT middleware");
   
    const token=req.headers["authorization"].split(" ")[1]
    if(token){
        console.log(token);
        //verify token
        try{
            const jwtResponse= jwt.verify(token,process.env.JWT_SECRET)
            console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        }catch(err){
            res.status(401).json("Authorization failed...Please login")
        }
    }else{
        res.status(406).json("please provide token")
    }

 }

 module.exports =jwtMiddleware