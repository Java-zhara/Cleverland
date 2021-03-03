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

let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let c = +prompt('Введите третье число');

calcMin(a,b,c);