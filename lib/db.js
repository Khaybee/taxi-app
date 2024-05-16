import mysql from 'mysql2'

//create a connetion pool

const pool = mysql.createPool({
    host: process.env.LOCAL_DB_HOST,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_NAME
})


module.exports = pool.promise()