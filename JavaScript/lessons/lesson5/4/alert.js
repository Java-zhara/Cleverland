"use strict";
const n = +prompt('Введите натуральное число');
let sum = 0; 
for (let i = 0; i <= n; i++) {
    sum += i;    
};
alert(sum);