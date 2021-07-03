

const rootDB=require("../../models");

const login =async (req,res,next)=>{

    const {clientName} = req.body;

    try {
        const data=await rootDB.client.findOne({
            where:{
                clientName
            }
        });

        if(!data){
            return next(new Error("Unsuccessful , no login"));
        }
        
    } catch (error) {
        throw error;
    }

    req.client = {
        database:clientName,
        username:'root',
        password:'root',
        host:'localhost'
    };
    next();

}



module.exports = login;