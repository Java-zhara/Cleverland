"use strict";
function circle(radius) {
  const numberPi = 3.14;
  let length = 2 * numberPi * radius; 
  return alert(length);
};

const radius = prompt('Введите радиус окружности');

circle(radius);