"use strict";
let number = +prompt ('Какое вы ввели число?');
if (number < 0) {
    alert('Отрицательное');
} else  if (number > 0) {
    alert('Положительное');
} else {
    alert('Ноль');
};