"use strict";
let corner = function(deg) {
  let rad = deg * 3.14 / 180; 
  return console.log(rad);
};

const deg = prompt('Введите значение угла в градусах');

corner(deg);