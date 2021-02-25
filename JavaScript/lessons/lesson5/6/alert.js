"use strict";
const n = +prompt('Введите натуральное число');
for (let i = 10; (i < 100); i++) {   
    if ((Math.trunc(i / 10) + (i % 10)) === n) {
        alert( i );
    };
};