'use strict';
const start = Date.now();

let sumNum = 0;

for (let i = 1; i <= 1000000; i++) {
  sumNum += i;
};

const end = Date.now();

console.log(`Цикл отработал за ${end - start} миллисекунд`);