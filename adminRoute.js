const express=require("express");
const route=express.Router();
const admindata= require("./adminModel");

route.post("/create",(req,res)=>{
    const ad=new admindata(req.body);
    ad.save();
    res.status(201).json(ad);

});
module.exports=route;