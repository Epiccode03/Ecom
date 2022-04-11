const mongoose=require("mongoose");

const ProductSchema=mongoose.Schema(
    {
        img:{type:String, required:true},
        title:{type: String, required:true, unique:true},
        desc:{type:String, required:true},
        categories:{type:Array},
        price:{type: Number, required:true}
    }
);

exports.module=mongoose.model("Products", ProductSchema);
