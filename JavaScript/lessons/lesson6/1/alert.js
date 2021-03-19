"use strict";
function checkAge(age) {
    if (age > 16) {
      return true;
    } else {
      return false;
    };
  };
  
  const age = +prompt('Сколько вам лет?');
  
  if ( checkAge(age) ) {
    alert( 'Добро пожаловать' );
  } else {
    alert( 'Вы еще молоды' );
  };