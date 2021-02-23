"use strict";
let numberFirst = Math.round (+prompt('Введите число?'));
let numberSecond =  Math.round (+prompt('Введите второе число?'));
let numberThird =  Math.round (+prompt('Введите третье число?'));
let numberAnswer = (numberFirst > numberSecond && numberFirst > numberThird) ? numberFirst :
    (numberSecond > numberFirst && numberSecond > numberThird) ? numberSecond :
    numberThird;
alert (numberAnswer);