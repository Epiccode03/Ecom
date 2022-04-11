const express=require("express");
const app=express();
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");

const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anshul:Anshul10@cluster0.5pb7s.mongodb.net/EcommerseApp?retryWrites=true&w=majority").then((data)=>{
    console.log("connnected");
}).catch((err)=>{
    console.log(err);
});
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);


app.listen(3000, ()=>{
    console.log("listening");
});