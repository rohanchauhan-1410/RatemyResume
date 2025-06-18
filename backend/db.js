const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password123",
  database: "resumedb",
});
module.exports = db;
