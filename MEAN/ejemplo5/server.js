var Sequelize = require('sequelize');

// db config
var config = require('./database.json');

var sequelize = new Sequelize(config.database, config.user, config.password, config);

sequelize.query('SELECT * FROM personas WHERE apellidos = ?',
	{ replacements: ['Aramburu'], type: sequelize.QueryTypes.SELECT }
).then(function(personas) {
	console.log(personas)
});
