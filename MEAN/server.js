var express = require('express');

var app = express();

// IMPORT MODELS
// =============================================================================
var Sequelize = require('sequelize');

// db config

var config = require('./database.json');


var sequelize = new Sequelize(config.database, config.user, config.password, config);

var Grupo = sequelize.import('models/personas.js');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});


var router = express.Router();

var gruposRouter = router.route('/grupos').get(function(req, res) {

});





app.use('/api', router);

app.listen(3000, function() { console.log('Servidor Node/Express iniciado')});
