let express=require('express');
 let router=express.Router();
 router.get("/viewtasks",(req,res)=>{
    res.send("view tasks page called");

 })
 router.post("/register",(req,res)=>{
    res.send("register router called");

 })
 module.exports=router;