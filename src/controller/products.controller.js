const express=require("express");
const router=express.Router()
const Products=require("../model/products.model")


router.post("",async(req,res)=>{
    try{
        const product=await Products.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const product=await Products.find().lean().exec()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const product=await Products.findById(req.params.id).lean().exec()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const product=await Products.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const product=await Products.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router;