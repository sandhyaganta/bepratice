const mongoose=require("mongoose");
const schema=mongoose.Schema;
const user=new schema({
    username:{
        type:String,
        requried:true,

    },
    password:{
        type:String,
        requried:true,
    },
   mobileno:{
    type:String,
    requried:true,

    }
},{
  timestamps:true  
}
);
 module.exports=mongoose.model("users" ,user)