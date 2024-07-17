const mysql = require('mysql2/promise');
const config = require('../config.js');
config();

const dbauth = {
    host: config.ServerDB,
    user: config.UserDB,
    password: config.passwordDB,
    database: config.DatabaseDB,
    port: config.PortDB,
    waitForconnections: true,
    connectionLimit: 10,
    queueLimit:0
};

async function getConecction(){
    const pool = mysql.createPool(dbauth);
    return createPool;
}

mosule.exports = getConecction;