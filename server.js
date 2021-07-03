const express=require("express");
const app=express();
const rootDB=require("./models");
const router=require("./router");

app.use(express.json());



app.use("/api",router);





app.listen(3000,()=>{
    // rootDB.sequelize.sync();
    // rootDB.sequelize.sync({force:true});
});