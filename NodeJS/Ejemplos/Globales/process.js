
var stdin = process.openStdin();


function leerEntrada() {

stdin.on('data', function(datos) {
    console.log('Escribiste: ' + datos);
  });


}

leerEntrada();
