const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "todos",
  port: 2001,
});

// open the MySQL connection
db.connect((error) => {
  if (error) throw error;
  console.log("DB connected");
});

module.exports = db;
