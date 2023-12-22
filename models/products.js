const mongoose=require('mongoose')

// Schema for product
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true});

const Product=mongoose.model('product',productSchema);
module.exports=Product;

