"use strict";
function moneyDouble(str) {
  let val = parseFloat(str);
  const string = val.toString().split('').length;
  const slice = str.slice(string);
  const double = val * 2;
  return double + slice;
};

const str = prompt('Введите валюту');

console.log(moneyDouble(str));