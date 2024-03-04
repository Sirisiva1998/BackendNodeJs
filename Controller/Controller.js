const registerModel=require('../Model/Registermodel.js');

const loginPage=(req,res)=>{
   res.send("Working");
}
const registerPage=async (req,res)=>{
    const registerBody=req.body;
    const {name,email,password}=registerBody;
    
    console.log(name,email,password);
    const user=await registerModel.findOne({email:email});
    console.log(user);
    try
    {
        if(!user)
        {
            await registerModel.create({name:name,email:email,password:password});
            res.json({message:"Email registered!"});
            console.log('2',(user));
      
        }
      else
      {
            res.json({message:"User already registered!"});
            console.log('1',user);
      }  
    }
    catch(err)
    {
        res.json({message:err});
    }
   
 }
 
module.exports={loginPage,registerPage};