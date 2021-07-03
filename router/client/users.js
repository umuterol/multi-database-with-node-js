const express=require("express");
const router=express.Router();

const clientDB=require("../../modelsClient");

const user = async (req,res)=>{

    if(!req.client){
      return  res.status(403)
        .json({
            status:false,
            msg:'Unsuccessful , no login',
        })
    };


  try {  
      const data = await clientDB(req.client).testTable.findAll();

      return  res.status(200)
        .json({
            status:true,
            msg:'Successful',
            data
        })
      
  } catch (error) {
      throw error;
  }

}



module.exports = user;