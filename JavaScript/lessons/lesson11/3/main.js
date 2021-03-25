"use strict";

let sentence  = 'ŽYVIE BIEŁARUŚ';

let arr = sentence.split(' ');

for (let sentence of arr) {
    console.log(sentence); 
};

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
};

console.log(arr.sort(compareNumeric));

let words = arr.sort(compareNumeric);

let str = words.join(' ');

console.log(str); 
