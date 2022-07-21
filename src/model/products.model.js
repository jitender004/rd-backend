const mongoose = require('mongoose');

const ProductSchema =  new mongoose.Schema({
    // id:{type:Number,required:false},
    title:{type:String, required:false} ,         //best seller
    img:{type:String,required:true},           //image
    name :{type:String,required:true},            //product name
    description :{type:String,required:true} ,      //product description
    price :{type:Number,required:true},             //product price
    rating :{type:Number,required:true} ,

    //for single product page
    color :{type:String},
    details :{type:String} ,
    size:{type:Number},
    qty:{type:Number}
},{
    timestamps:true,
    versionKey:false,
})

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;