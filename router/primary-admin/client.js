const express=require("express");
const router=express.Router();

const register = require("../../controllers/admin/client/register");


router.post("/create",
register
);



module.exports=router;