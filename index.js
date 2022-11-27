const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const router = require("./router/router");

const app=express();

app.use(cors({origin:"*"}))
app.use(express.json());

app.use("",router)

app.listen(process.env.PORT||8080,async()=>{
try{
    await mongoose.connect("mongodb+srv://shekhar:12345@cluster0.0ht1zgg.mongodb.net/usernew?retryWrites=true&w=majority")
    console.log("connected at port 8080")
}
catch(e){
    console.log(e)
}
})