"use strict";
let date = new Date();
let h = date.getHours();
let name = prompt('Как Ваше имя?');
switch (h) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert( `Доброе утро ${name}` );
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        alert( `Добрый день ${name}` );
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert( `Добрый вечер ${name}` );
        break;
    default:
        alert( `Доброй ночи ${name}` );
};