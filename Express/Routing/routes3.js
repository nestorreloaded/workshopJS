var express = require('express');

var app = express();

var router = express.Router();

var personasRouter = router.route('/personas');

personasRouter.get(function(req, res) {
    console.log('GET - Personas');
});

personasRouter.post(function(req, res) {
  console.log('POST - Personas');
});

personasRouter.put(function(req, res) {
  console.log('PUT - Personas');
});

personasRouter.delete(function(req, res) {
  console.log('DELETE - Personas');
});

app.use('/api', router);

app.listen(3000);
