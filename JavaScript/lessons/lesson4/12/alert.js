"use strict";
// decimeter = 1;
// kilometer = 2;
// meter = 3;
// millimeter = 4;
// centimeter = 5;

let N = +prompt("Введите номер единицы длины");
let L = +prompt("Введите длину отрезка");
switch (N) {
    case 1:
        alert( L/10 );
        break;
    case 2:
        alert( L*1000 );
        break;
    case 3:
        alert( L );
        break;
    case 4:
        alert( L/1000 );
        break;
    case 5:
        alert( L/100 );
        break;
};