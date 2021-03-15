"use strict";
function foo (a, b, c) {
  
  function multiply(a, b) {
    return multiply = a * b;
  };

  console.log(multiply(a, b));

  for (let i = 1; i < c; i++) {
  let result = multiply ** c;

  return result; 
  };
};

const numFirst = +prompt('Введите первое число');

const numSecond = +prompt('Введите второе число');

const deg = +prompt('Введите степень');

alert(foo(numFirst, numSecond, deg));