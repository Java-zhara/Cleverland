"use strict";
function Salary() {
  this.Ivanov = 100;
  this.Petrov = 200;
  this.Sidorov = 300;
};

const salary = new Salary;

function maxSalary(salary) {

  let max = 0;
  let maxName = null;

  for (const [name, wages] of Object.entries(salary)) {
    if (max < wages) {
      max = wages;
      maxName = name;
    };
  };

  return `${maxName} ${max}`;
};

let middleWages = 0;
for (let key in salary) {
  middleWages += salary[key] / Object.keys(salary).length;
};

function minSalary(salary) {

  let min = Number.MAX_VALUE;
  let minName = null;

  for (const [name, wages] of Object.entries(salary)) {
    if (min > wages) {
      min = wages;
      minName = name;
    };
  };

  return `${minName} ${min}`;
};

console.log(`Максимальная зарплата ${maxSalary(salary)}`);

console.log(`Средняя зарплата ${middleWages}`);

console.log(`Минимальная зарплата ${minSalary(salary)}`);