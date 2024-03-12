const cartModel=require('../Model/CartModel.js');

const cartFeature=async (req,res)=>{
  const cart=req.body;
  res.send("cart");
}


module.exports=cartFeature;