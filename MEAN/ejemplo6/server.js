var Sequelize = require('sequelize');

// db config
var config = require('./database.json');

var sequelize = new Sequelize(config.database, config.user, config.password, config);

var Personas = sequelize.import('modelos/personas.js');

Personas.find({
	where: {
		id: '14'
	},
	attributes: [ 'apellidos', 'nombres', 'numero_documento' ]
}).then(function(item) {
	console.log(item.apellidos + ', ' + item.nombres);
});
