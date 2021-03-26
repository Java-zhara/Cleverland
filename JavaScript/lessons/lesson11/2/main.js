"use strict";

let arr = [2, -15, 12, 83, -29, 111, -6, 22];

console.log(arr);

let numThree = arr.findIndex(item => item > 99);

console.log(numThree);

let multipleOfFive = arr.find(item => item % 5 === 0);

console.log(multipleOfFive);

let arrNew = arr.filter(item => item > 0);

console.log(arrNew);

arrNew.sort((a, b) => a - b);

console.log(arrNew);

const mapArr = arr.map(item => {
    item < 0 ? item = Math.abs(item) : item = item * 2
    return item;
});

console.log(mapArr);

arrNew.sort((a, b) => b - a);

console.log(arrNew);

console.log(arrNew.reverse());

let resultMult = arrNew.reduce((mult, current) => mult * current, 1);

console.log(resultMult);

let resultMiddle = arrNew.reduce((sum, current) => sum + current) / arrNew.length;

console.log(resultMiddle);
