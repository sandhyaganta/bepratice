const express=require("express");
const route=express.Router();
const userdata=require("./userModel");
route.post("/create",(res,req)=>{
    const ad=new userdata(req.body);
    
})