
// const ClientConfig=require("../config/ClientConfig");
const rootDB=require("../models");

exports.existClient=async (req,res,next)=>{
    
    const {clientName}=req.params;

    try {
        const data=await rootDB.client.findOne({
            where:{
                clientName
            }
        });

        if(data){
            return next();
        }
        return next(new Error("there is no such user"));
        
    } catch (error) {
        throw error;
    }

}