"use strict";
let person = {     
  surname: "Иванов",  
  name: "Иван",
  middleName: "Иванович",      
};

person.birth = 1990;
person.profession = "Инженер-энергетик";
person.position = "Главный энергетик";
person.experience = 5;

let user = {     
  surname: "Иванов",  
  name: "Иван",
  birth: 1990,      
};

delete person.middleName;

if (!person.middleName) {
  alert('Такого свойства нет');  
} else {
  alert(person.middleName);
};

function count(person) {
  return Object.keys(person).length;
};

alert(count(person));

let countNumber = 0;
for (let key in person) {
    if (typeof person[key] === 'number') countNumber++
};

alert (countNumber);