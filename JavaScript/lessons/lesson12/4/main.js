'use strict';
let speed = [9.73, 9.68, 9.71, 9.74, 9.72, 9.75];

let [max1, max2, max3, ...rest] = speed.sort((a, b) => b - a);

console.log(max1, max2, max3);

console.log(rest);