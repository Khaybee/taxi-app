import mysql from 'mysql2'

//create a connetion pool

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'taxi'
})


module.exports = pool.promise()