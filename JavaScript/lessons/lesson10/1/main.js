"use strict";

const inch = 2.54;

function calcDiagonal() {
  return (num * inch).toFixed(2);
};

const num = +prompt('Введите диагональ телевизора в дюймах');

console.log(`Диагональ телевизора в сантиметрах = ${calcDiagonal()}`);