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

function topSalary(salary) {

  let max = 0;
  let maxName = null;

  for (const [name, wages] of Object.entries(salary)) {
    if (max < wages) {
      max = wages;
      maxName = name;
    };
  };

  return maxName;
};

console.log(topSalary(salary));
