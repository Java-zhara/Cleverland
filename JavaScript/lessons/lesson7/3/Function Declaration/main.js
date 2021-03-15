"use strict";
function calcFactorial(n) {
  let mult = 1;
  for (let i = 1; i <= n ; i++) {
    mult *= i; }
    return mult;
  }; 
  
  const n = +prompt('Введите число и получите его факториал');

  console.log (calcFactorial(n));