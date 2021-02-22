"use strict";
let n = +prompt('Сколько долек в ширину?');
let m = +prompt('Сколько долек в ширину?');
let k = +prompt('Сколько долек хотите отломить ?');
let answer = (k < n * m && ((k % n === 0) || (k % m === 0))) ? 'Ok!' :
('No!');
alert (answer);


