"use strict";
function hello(name) {  
  if(!name) {
    return 'Привет, гость';
  } else {	
    return `Привет, ${name}`;
  };
};
const name = prompt('Введите имя');
alert(hello(name));