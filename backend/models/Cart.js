const mongoose=require("mongoose");

const CartSchema=mongoose.Schema(
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
        ]
    },
    {timestamps:true}
);

exports.module=mongoose.model("Cart", CartSchema);
