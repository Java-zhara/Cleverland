"use strict";
function checkNumber(number) {
  if (number > 10) {
    return alert(number ** 2);
  } else if (number < 7) {
      return alert('число меньше 7');
  } else if (number === 8) {
    return alert(7);
  } else if (number === 9) {
    return alert(8);
  };
};

const num = +prompt('Введите число');

checkNumber(num);