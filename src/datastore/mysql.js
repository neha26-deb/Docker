import mysql from 'mysql2/promise';


console.log(process.env.DB_HOST || 'localhost');
const db_host = process.env.DB_HOST || 'localhost';
// setInterval(()=>{console.log({dbHostVal: process.env.DB_HOST})}, 2000);
const dbConfig = {
    host: db_host,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '12345',
    database: process.env.DB_DATABASE || 'nehadb1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  };
console.log(dbConfig);
const pool = mysql.createPool(dbConfig);

export default pool;