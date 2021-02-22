"use strict";
let date = new Date();
let h = date.getHours();
let name = prompt('Как Ваше имя?');

if (h >= 4 && h <= 9) {
    alert (`Доброе утро ${name}`);
} else if (h >= 10 && h <= 16) {
    alert (`Добрый день ${name}`);
} else if (h >= 17 && h <= 20) {
    alert (`Добрый вечер ${name}`);
} else {
    alert (`Доброй ночи ${name}`);
};