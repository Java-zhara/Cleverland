"use strict";
let salary = {
  Ivanov: 100,
  Petrov: 200,
  Sidorov: 300,
  Filipov: 400,
  Suslov: 500,
  Marin: 600,
  Kotov: 700,
  Lamin: 800,
  Morozov: 900,
  Vetrov: 1000,
};

let clone = {};

for (let key in salary) {
  clone[key] = salary[key];
};

let middleWages = 0;
for (let key in salary) {
  middleWages += salary[key] / Object.keys(salary).length;
};

console.log(middleWages);

let mansMiddleWagesAndMore = 0;
for (let key in salary) {
  if (salary[key] >= middleWages) mansMiddleWagesAndMore++
};

console.log(mansMiddleWagesAndMore);

salary.middleWages = middleWages;

console.log(salary);