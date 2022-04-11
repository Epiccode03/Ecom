const  router = require("express").Router();
const User=require("../models/User");
const CryptoJs=require("crypto-js");
const jwt=require("jsonwebtoken");


//REGISTER
router.post("/register",(req,res)=>{
    const newUser=new User({
        userName:req.body.userName,
        email:req.body.email,
        name:req.body.name,
        password:req.body.password
    });
    try{
        newUser.save();
    }catch(err){
        res.send(err);
    }
    
});

router.post("/login", async(req,res)=>{
    try{
        const user=await User.find({userName:req.body.userName,
        password:req.body.password}).then((user)=>{
            if(user){
                const accessToken=jwt.sign({
                   id: user._id,
                   isAdmin : user.isAdmin
               }, "key",{expiresIn:"3d"}
               );
             
              const {password, ...others}=user;
               res.status(200).json({...others, accessToken});
           }
        });
    }catch(err){
        res.send(err);
    }
}
);

module.exports=router;