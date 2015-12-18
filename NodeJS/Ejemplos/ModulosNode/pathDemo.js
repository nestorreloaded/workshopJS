var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/home/nestor/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));
