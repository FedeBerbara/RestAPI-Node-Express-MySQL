require('dotenv').config();
import mysql from 'mysql';

const dbConnection =  mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

export default dbConnection;