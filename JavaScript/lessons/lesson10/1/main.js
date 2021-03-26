"use strict";

const inch = 2.54;

function calcDiagonal() {
  return Math.floor(num * inch * 100) / 100;
};

const num = +prompt('Введите диагональ телевизора в дюймах');

console.log(`Диагональ телевизора в сантиметрах = ${calcDiagonal()}`);