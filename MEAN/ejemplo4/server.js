var mysql = require("mysql");

var conexion = mysql.createConnection(
	{
		host	:	'localhost',
		user	:	'ejemplo4',
		password	:	'ejemplo4',
		database	:	'workshop_js',
	}
);

conexion.connect();

var queryString = 'SELECT * FROM personas';

conexion.query(queryString, function(err, rows, fields) {
	if (err) throw err;

	for (var i in rows) {
		console.log(rows[i].id + ': ' + rows[i].apellidos);
	}
});

conexion.end();
