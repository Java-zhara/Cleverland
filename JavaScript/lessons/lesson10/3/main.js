"use strict";
function countWords(str) {
  return str = str.split(/\s+/).length;
};

let str = prompt('Введите предложение');

console.log(`Количество слов в предложении = ${countWords(str)}`);