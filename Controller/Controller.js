const registerModel=require('../Model/Registermodel.js');

const loginPage=async (req,res)=>{
   const loginBody=req.body;
   const {email,password}=loginBody;

   const user=await registerModel.findOne({email:email});

   console.log('login',user);
    try
    {
        if(!user)
        {
            res.json({message:"Email Id not registered!"});
        }
        else
        {
            if(password===user.password)
            {
                res.cookie("username",email,{maxAge:900000,httpOnly:true});
                res.json({message:"Login successfull!",login:true,user:user.name});
            }
            else{
                res.json({message:"Password not correct!",login:false});
            }
        }  
    }
    catch(err)
    {
        res.json({message:err});
    }
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

 const removeCookies=(req,res)=>{
     const cookie=req.cookies.username;
     if(cookie)
     {
        console.log("expired");
        res.cookie("username","",{expires:new Date(Date.now())});
        res.send({cookie:true,msg:"Cookie removed"});
     }
     else
     {
        res.send({cookie:false,msg:"No cookie found!"});
     }
 }

module.exports={loginPage,registerPage,removeCookies};