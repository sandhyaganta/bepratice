const express=require("express");
const route=express.Router();
const userdata=require("./userModel");
route.post("/create",(req,res)=>{
    const ad=new userdata(req.body);
    ad.save();
    res.status(201).json(ad);
});
module.exports=route;