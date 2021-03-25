"use strict";

let fruits = ['Яблоко', 'Апельсин', 'Слива'];

fruits.push('Абрикос');

console.log(fruits);

fruits.unshift('Нектарин', 'Персик');

console.log(fruits);

fruits.splice(2, 2);

console.log(fruits);

let favoriteFruits = ['Нектарин', 'Персик', 'Слива'];

console.log(favoriteFruits);

let berries = ['Барабарис', 'Виноград', 'Годжи'];

console.log(berries);

let fruitsBerries = fruits.concat(berries);

console.log(fruitsBerries);

console.log(fruitsBerries.length);

favoriteFruits.forEach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в массиве favoriteFruits`);
});

console.log(fruits.indexOf('Слива'));

console.log(fruits.indexOf('Яблоко'));