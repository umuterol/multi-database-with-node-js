const express=require("express");
const router=express.Router();


const clientRouter=require("./client");

router.use("/client",clientRouter);




module.exports=router;