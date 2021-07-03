
const rootDB = require("../../../models");
const { createClientDB } = require("../../../controllers/admin/client/createClientDB");

const register = async (req, res) => {

    const { clientName } = req.body;

    try {
        const data = await rootDB.client.create({
            clientName
        });

        await createClientDB(clientName);
        

        res.json({
            status:true,
            msg:'Successful',
        })
    } catch (error) {
        throw error;
    }

}

module.exports = register;