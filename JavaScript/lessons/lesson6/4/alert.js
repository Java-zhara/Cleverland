"use strict";
function pow(a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result *= a;
  };
  return result;
};

const a = prompt("Введите число");
const b = prompt("Введите степень");

if (b < 1) {
  alert(`Степень ${b} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(a, b) );
};