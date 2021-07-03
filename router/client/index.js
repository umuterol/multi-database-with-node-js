const express = require("express");
const router = express.Router({ mergeParams: true });
const authorization=require("../../middlewares/authorization");
const users=require("./users");
const login=require("./login");
const clientDB=require("../../modelsClient");
// const {sequelizeMigrate}=require("../../controllers/admin/client/createClientDB");
//sequelize migrate
// router.use(sequelizeMigrate);



//login
router.use("/login",login,(req,res)=>{

    if(!req.client){
        res.status(403)
        .json({
            status:false,
            msg:'Unsuccessful , no login',
        })
    };

    
    clientDB(req.client).sequelize.sync();

    res.status(200)
        .json({
            status:true,
            msg:'Successful',
            data:req.client,
        })


});

router.use("/users",login,users);

module.exports = router;



