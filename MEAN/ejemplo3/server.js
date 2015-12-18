var http = require("http");

http.createServer(escuchar).listen(3000);

function escuchar(request, response) {
	response.writeHead(200);	
	response.write("<h1>Hola mundo!</h1>");
	response.end();
}

console.log("Servidor nodejs iniciado en el puerto 3000.");
