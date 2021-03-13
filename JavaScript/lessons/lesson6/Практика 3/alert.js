"use strict";
function foo (a, b, c) {
  
  function multiply(a, b) {
    return a * b;
  };

  console.log(multiply(a, b));

  for (let i = 1; i < c; i++) {
  let result = multiply(a, b) ** c;

  return result; 
  };
};

let numFirst = +prompt('Введите первое число');

let numSecond = +prompt('Введите второе число');

let deg = +prompt('Введите степень');

alert(foo(numFirst, numSecond, deg));