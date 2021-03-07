"use strict";
let corner = () => {
  let rad = deg * 3.14 / 180; 
  return console.log(rad);
};

let deg = prompt('Введите значение угла в градусах');

corner(deg);