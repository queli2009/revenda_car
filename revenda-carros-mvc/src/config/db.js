const mysql = require("mysql2/promise");
const { createConnection } = require("node:net");
require("dotenv").config();

const pool = mysql.createPool({
host: process.env.DB_HOST,
port: process.env.DB_PORT,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
waitForConnections:true,
ConnectionLimit:10,
queueLimit:0
});