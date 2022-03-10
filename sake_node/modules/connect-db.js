const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnection: true,
  connectionLimit: 5,
  queryTimeout: 0,
});

module.exports = pool.promise();
