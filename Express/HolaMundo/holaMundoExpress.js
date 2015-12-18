var express = require('express');

var http = require('http');

var app = express().use(function(req,res) {
  res.send('Bienvenidos a NodeJS y Express');
});

http.createServer(app).listen(3000);
