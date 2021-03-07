"use strict";
function calcSum(a, b) {
  let sum = b;
  for (let i = a; i < b; i++) {
    sum += i; }
    return sum;
  }; 
  
  let a = +prompt('Введите первое число');
  let b = +prompt('Введите второе число');

  console.log (calcSum(a, b));