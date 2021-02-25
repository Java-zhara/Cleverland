"use strict";
const n = +prompt('Введите натуральное число');
for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
        alert(i); 
    }; 
};