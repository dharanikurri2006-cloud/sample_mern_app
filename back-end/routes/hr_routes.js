let express=require('express')
 let router=express.Router();
 router.get("/viewemployees",(req,res)=>{
    res.send("view employees page called")

 })
 router.post("/assign-task",(req,res)=>{
    res.send("assign task router called")

 })
 module.exports=router;
