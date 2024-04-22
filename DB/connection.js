const mongoose=require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("mongoDB connected with Server");
    
}).catch(err=>{
    console.log("connection failed");
    console.log(err);
})