//import the connection from connection.js file
const connection = require("./connection.js");

const printQMarks = num => {
	let arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
};

const objectToSql = object => {
	var arr = [];
	for (var key in object) {
		arr.push(`${key} = ${object[key]}`);
	}
	return arr.toString();
};

const orm = {
	all: (tableInput, cb) => {
		let queryString = `SELECT * FROM ${tableInput};`;
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: (table, cols, vals, cb) => {
		let queryString = `INSERT INTO ${table};`;

		queryString += ` (`;
		queryString += cols.toString();
		queryString += `) `;
		queryString += `VALUES (`;
		queryString += printQMarks(vals.length);
		queryString += `) `;
		console.log(queryString);

		connection.query(queryString, vals, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	update: (table, objColVals, condition, cb) => {
		let queryString = `UPDATE ${table};`;

		queryString += ` SET `;
		queryString += objectToSql(objColVals);
		queryString += ` WHERE `;
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;
