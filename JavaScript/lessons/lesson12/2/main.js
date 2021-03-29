'use strict';
let monitors = {
    'Philips': 21,
    'Asus': 19,
    'Samsung': 23.5,
    'LG24MK': 23.6,
    'LG27GL': 27,
};

const inchInCentimeters = 2.54;

let fromInchInCentimeters = Object.entries(monitors).map(([key, value]) => [key, value * inchInCentimeters]);

console.log(fromInchInCentimeters);

console.log(`Количество мониторов = ${Object.entries(monitors).length}`);