var os = require("os");

// OS type
console.log('SO : ' + os.type());

// OS platform
console.log('Plataforma : ' + os.platform());

// Total system memory
console.log('Total de Memoria : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('Memoria Libre : ' + os.freemem() + " bytes.");
