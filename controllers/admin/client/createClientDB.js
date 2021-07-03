
const config = require("../../../config/ClientConfig");
const mysql = require("mysql2");


const connectDB = () => {
    const dbMysql = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
    });


    dbMysql.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('MySql Connected...');
    })

    return dbMysql;
}



// const sequelizeMigrate = (req,res,next) => {

//     const clientDB = require("../../../modelsClient");
//     clientDB.sequelize.sync();
//     next();
// }


const createClientDB = async (clientName) => {
    const dbMysql=connectDB();

    const sql = "CREATE DATABASE " + clientName;
    dbMysql.query(sql, (err, result) => {
        if (err) throw err;
        console.log('database created');
    })

    // config.init({
    //             database:clientName,
    //             username:'root',
    //             password:'root',
    //             host:'localhost'
    //         });
    

}

module.exports = {
    createClientDB,
};