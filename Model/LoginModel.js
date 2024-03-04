const mongoose=require('mongoose');

const schema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },   
    password:{
        type:String,
        required:true,
    },
});

const registerModel=mongoose.model("RegisterModel",schema);

module.exports=registerModel;