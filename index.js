const express=require("express");
const cors=require("cors");
const dotenv=require('dotenv').config({path:"./config.env"});
const dbConnect=require('./Database/Database.js');
const authRouter=require('./Routes/AuthRoute.js');
//Setup app
const app=express();

app.use(cors());
app.use("/",authRouter);

dbConnect();

app.listen(process.env.PORT || 2600,process.env.host,()=>{console.log(`Server running on port: ${process.env.PORT}`)});