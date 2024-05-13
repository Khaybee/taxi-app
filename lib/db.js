import mysql from 'mysql2'

//create a connetion pool

const pool = mysql.createPool({
     connectionLimit: parseInt(process.env.DB_CONNECTIONLIMIT),
     host: process.env.LOCAL_DB_HOST,
     user: process.env.LOCAL_DB_USER,
     password: "",
     database: process.env.LOCAL_DB_NAME
 })
 

module.exports = pool.promise()