const mongoose=require("mongoose");

const oredrSchema=mongoose.Schema(
    {
        userId:{type:String, required:true},
        products:[
            {
                productId:{
                    type:String
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }
        ],
        amounty:{
            type:Number, required:true
        },
        address:{type:Object, required:true}, //its object since we need differnent fileds like location, pincode
        status:{type:String, default:"pending"}
    },
    {timestamps:true}
);

exports.module=mongoose.model("Orders", orderSchema);
