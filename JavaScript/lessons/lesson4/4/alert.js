"use strict";
let numberFirst = +prompt('Введите число?');
let numberSecond = +prompt('Введите еще одно число?');
let numberAnswer = (numberFirst > numberSecond) ? 1 :
    (numberFirst < numberSecond) ? 2 :
    0;
alert (numberAnswer);