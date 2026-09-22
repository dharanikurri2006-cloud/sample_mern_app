let express=require('express');
let router=express.Router();
let {users}=require('../models/users');

router.get("/viewtasks",(req,res)=>{
    res.send("view tasks page called");
 })

 router.post("/register",async (req,res)=>{
   let data=req.body;
   let newuser=new users(data);
   let result=await newuser.save();
   res.send(result);
 })

  router.post("/login",(req,res)=>{
    res.send("login page called");
 })

 module.exports=router;
