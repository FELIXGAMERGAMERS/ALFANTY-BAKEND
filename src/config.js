const{config} = require('dotenv');
config();

module.exports = {
    //Server config
    PORT: process.env.PORT ||  3000,
    //Database Config
    UserDB:  process.env.UserDB,
    passwordDB: process.env.passwordDB,
    ServerDB: process.env.ServerDB,
    DatabaseDB: process.env.DatabaseDB,
    PortDB: process.env.PortDB
}