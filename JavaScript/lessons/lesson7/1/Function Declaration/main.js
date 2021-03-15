"use strict";
function corner(deg) {
  let rad = deg * 3.14 / 180; 
  return console.log(rad);
};

const deg = prompt('Введите значение угла в градусах');

corner(deg);