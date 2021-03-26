"use strict";
function postMail(str) {
  let email = /\S+@\S+\.\S+/;
  if (email.test(str) === true) {
    return str.split('@')[1];
  } else {
    return 'Адрес электронной почты имеет некорректный формат'
  };
};

const str = prompt('Введите email');

console.log(postMail(str));