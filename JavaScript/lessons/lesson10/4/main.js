"use strict";
function moneyDouble(str) {
  let val = parseFloat(str);
  let string = val.toString().split('').length;
  let slice = str.slice(string);
  let double = val * 2;
  return double + slice;
};

const str = prompt('Введите валюту');

console.log(moneyDouble(str));