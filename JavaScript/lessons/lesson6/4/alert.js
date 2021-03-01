"use strict";
function parametr(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result *= a;
  };
  return result;
};

let a = prompt("Введите число");
let b = prompt("Введите степень");

if (b < 1) {
  alert(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
  alert( parametr(a, b) );
};