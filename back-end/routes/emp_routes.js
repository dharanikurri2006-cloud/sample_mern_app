let express=require('express');
let router=express.Router();
let {users}=require('../models/users');
let bcrypt=require('bcrypt');

 router.post("/register",async (req,res)=>{
   let data=req.body;
   data.password=await bcrypt.hash(data.password,10);
   let newuser=new users(data);
   let result=await newuser.save();
   res.send(result);
 })

router.get("/viewtasks",(req,res)=>{
    res.send("view tasks page called");
 })

  router.post("/login",(req,res)=>{
    res.send("login page called");
 })

 module.exports=router;
