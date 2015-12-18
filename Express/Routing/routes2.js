var express = require('express');

var app = express();


//Se ejecuta siempre
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


//Se ejecuta cuando la URL es /usuarios/<idUsuario>
app.use('/usuarios/:id', function (req, res, next) {
  console.log('Tipo de solicitud:', req.method);
  console.log('Request URL:', req.originalUrl);
  console.log('ID:', req.params.id);
  next();
});


app.listen(3000);
