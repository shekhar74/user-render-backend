const express=require("express");
const { model } = require("mongoose");
const UserModel = require("../schema/user.schema");
const router=express.Router();

router.get("",(req,res)=>{
    res.send("HomePage")
})

router.post("/signup",async(req,res)=>{
    try{
        let data=req.body;
        const user=await UserModel.create(data);
        res.send(user)
    }
    catch(e){
        res.send(e);
    }
})





module.exports=router;