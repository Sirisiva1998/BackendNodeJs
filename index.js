const express=require("express");
const cors=require("cors");
const dotenv=require('dotenv').config({path:"./config.env"});

//Setup app
const app=express();

app.use(cors());

app.listen(process.env.PORT || 2600,process.env.host,()=>{console.log(`Server running on port ${process.env.host}`)});