"use strict";
let numberDaysOfMonth = prompt("Введите название дня недели");
switch (numberDaysOfMonth) {
    case 'Понедельник':
        alert( '1, 8, 15, 22, 29' );
        break;
    case 'Вторник':
        alert( '2, 9, 16, 23, 30' );
        break;
    case 'Среда':
        alert( '3, 10, 17, 24' );
        break;
    case 'Четверг':
        alert( '4, 11, 18, 25' );
        break;
    case 'Пятница':
        alert( '5, 12, 19, 26' );
        break;
    case 'Суббота':
        alert( '6, 13, 20, 27' );
        break;
    case 'Воскресенье':
        alert( '7, 14, 21, 28' );
        break;
    default:
        alert( "Какой-то новый день недели?" );             
};