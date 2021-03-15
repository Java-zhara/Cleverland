"use strict";
let calcSum = (a, b) => {
  let sum = b;
  for (let i = a; i < b; i++) {
    sum += i; }
    return sum;
  }; 
  
  const a = +prompt('Введите первое число');
  const b = +prompt('Введите второе число');

  console.log (calcSum(a, b));