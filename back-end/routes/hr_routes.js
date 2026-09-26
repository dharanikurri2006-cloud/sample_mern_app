let express=require('express');
let router=express.Router();
let {users}=require('../models/users');

 router.get("/viewemployees",async (req,res)=>{
   let result= await users.find();
    res.send(result)
 })

 router.post("/assign-task",(req,res)=>{
    res.send("assign task router called")
 })

 router.get("/viewtasks",(req,res)=>{
    res.send("view tasks page called")
 })

 router.delete("/deleteemployee/:id",async (req,res)=>{
    let deleterecord= await users.findByIdAndDelete(req.params.id);
    res.send(deleterecord);
 })   

 module.exports=router;
