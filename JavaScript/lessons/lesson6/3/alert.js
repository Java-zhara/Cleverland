"use strict";
function calcMin(a,b,c) {
  if (a < b && a < c) {
    return alert(a);
  } else if (b < a && b < c) {
      return alert(b);
  } else if (c < a && c < b) {
    return alert(c);
  };
};

const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');

calcMin(a,b,c);