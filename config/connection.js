require("dotenv").config();
var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: process.env.DB_USER,

	// Your password
	password: process.env.DB_PASS,
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	// connection.end();
});

module.exports = connection;
