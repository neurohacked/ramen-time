/*
 * setup a model that defines
 * how interface with the database.
 */
var orm = require('../config/orm.js');

var ramen = {
	all: function (cb) {
		orm.all('ramen', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('ramen', cols, vals, function (res) {
			cb(res);
		});
	},
	modify: function (objColVals, condition, cb) {
		orm.update('ramen', objColVals, condition, function (res) {
			cb(res);
		});
	},
	scrap: function (condition, cb) {
		orm.delete('ramen', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = ramen;
