const jwt=require("jsonwebtoken");

const verifyToken=()=>{
    const header= req.header.token;
    if(header){
        const token=header.split(" ")[1];
        jwt.verify(token, "key", (err,user)=>{
            req.user=user;
            next();
        })
    }else{

    }
};

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken
    if(req.user.id==req.params.id){
        next();
    }else{
        res.status(400).json("You are not authenticated");
    }
}

module.exports={verifyToken,verifyTokenAndAuthorization};