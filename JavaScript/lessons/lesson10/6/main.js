"use strict";
function palindrom(str) {
  return str === str.split('').reverse().join('');
};

let str = prompt('Введите палиндром');

console.log(palindrom(str));