'use strict';
const start = Date.now();

for (let i = 0; i < 1000000; i++) {
  let sunNum = i + i + i;
};

const end = Date.now();

console.log(`Цикл отработал за ${end - start} миллисекунд`);