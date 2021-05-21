const dotenv = require("dotenv");
const mysql = require("mysql");

/* entorno de inicio */
dotenv.config();

/* crear conexion a la base de datos */
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE
});

/* abrir conexion */
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database");
});

module.exports = connection;
