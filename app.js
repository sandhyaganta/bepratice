const express=require('express');
const mongoose=require('mongoose');
const adminRoute = require('./adminRoute')
const userRoute=require('./userRoute')
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
PORT=4500;
db_Url="mongodb://localhost:27017/practice";
app.listen(PORT, () =>{
    console.log("server start on port 4500");
});
mongoose
.connect(db_Url)
.then(console.log("db connected" ))
.catch((err)=>{
    console.log("db not connected")
});
app.use('/admin',adminRoute)
app.use('/user',userRoute)

