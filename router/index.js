const express=require("express");
const router=express.Router();

const primaryAdminRouter=require("./primary-admin");
const clientRouter=require("./client");
const authorization=require("../middlewares/authorization");

router.use("/admin",primaryAdminRouter);


router.use("/:clientName",authorization.existClient,
clientRouter);



module.exports=router;