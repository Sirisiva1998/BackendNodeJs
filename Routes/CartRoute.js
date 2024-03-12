const express=require('express');

const cartController=require('../Controller/CartController.js');

const cartModel=require('../Model/CartModel.js');

const router=express.Router();

router.post("/cart",cartController);

module.exports=router;