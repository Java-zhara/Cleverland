"use strict";
function calcFactorial(n) {
  let mult = n - (n - 1);
  for (let i = 1; i <= n ; i++) {
    mult *= i; }
    return mult;
  }; 
  
  let n = +prompt('Введите число и получите его факториал');

  console.log (calcFactorial(n));