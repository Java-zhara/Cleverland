'use strict';
const person = {
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванович',
    medicalExamination: true,
};

const person2 = JSON.stringify(person);

console.log(person2);

const person3 = JSON.parse(person2);

console.log(person3);

const person4 = 0;
for (let key in person3) {
  console.log(key, person3[key]);
};