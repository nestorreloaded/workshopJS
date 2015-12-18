var util = require('util');
var my_name = 'Nestor',
my_class = 5,
my_roll_no = 11,
my_fav_subject= { subj1: 'English', subj2: 'MEAN.'};
var format1 = util.format('Mi nombre es %s ',my_name);
var format2 = util.format('Leo en la clase %d,',my_class);
var format3 = util.format('Mi nro favorito es el %d,',my_roll_no);
var format4 = util.format('Mis tags favoritos son %j',my_fav_subject);
console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
