var http = require("http");

http.createServer(function(request,response) {
	response.writeHead(200);
	response.write("<b>Hola mundo!</b>");
	response.end();
	}
).listen(3000);

console.log("Servidor nodejs iniciado en el puerto 3000.");
