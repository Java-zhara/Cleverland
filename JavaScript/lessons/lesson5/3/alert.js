"use strict";
let sum = 0;
while (true) {
  let number = +prompt("Введите число", '');
  if (!number) break; 
  sum += number;
};
alert( `Сумма = ${sum}`);