const mysql = require('mysql2');
require('dotenv').config();

const dbPort = process.env.DB_PORT;

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: dbPort,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conn.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});
module.exports = conn;
