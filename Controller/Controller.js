const loginModel=require('../Model/LoginModel.js');
const registerModel=require('../Model/Registermodel.js');

const loginPage=(req,res)=>{
   res.send("Working");
}
const registerPage=(req,res)=>{
    res.send("Working Register");
 }
 
module.exports={loginPage,registerPage};