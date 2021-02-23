"use strict";
let number = +prompt("Введите число в диапазоне от 1 до 5");
switch (number) {
    case 1:
        alert( 'плохо' );
        break;
    case 2:
        alert( 'неудовлетворительно' );
        break;
    case 3:
        alert( 'удовлетворительно' );
        break;
    case 4:
        alert( 'хорошо' );
        break;
    case 5:
        alert( 'отлично' );
        break;
    default:
        alert( "Читайте внимательно задание" );
};