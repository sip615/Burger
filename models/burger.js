const orm = require("../config/orm");

const burger = {
	all: cb => {
		orm.all("burgers", res => {
			cb(res);
		});
	},
	create: (name, cb) => {
		orm.create("burger", ["burger_name", "devaoured"], [name, false], cb);
	},
	update: (id, cb) => {
		let condition = `id=${id};`;
		orm.update(
			"burgers",
			{
				devoured: true
			},
			condition,
			cb
		);
	}
};

module.exports = burger;
