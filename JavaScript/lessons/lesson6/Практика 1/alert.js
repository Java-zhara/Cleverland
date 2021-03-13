"use strict";
function hello(name) {  
  if(!name) {
    return 'Привет, гость';
  } else {	
    return `Привет, ${name}`;
  };
};
let name = prompt('Введите имя');
alert(hello(name));