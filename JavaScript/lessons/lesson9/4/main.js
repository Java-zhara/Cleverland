"use strict";
const salary = {
  wages: {
    ivanov: 100,
    petrov: 200,
    sidorov: 300,
  },
  calcMiddle() {
    let sum = 0;
    for (let key of Object.values(this.wages)) {
      sum += key;
    };
    const middleWage = sum / Object.values(this.wages).length;
    return middleWage
  },
  calcMax() {
    let max = 0;
    for (let key of Object.values(this.wages)) {
      if (max < key) {
        max = key;
      };
    };
    return max;
  },
  calcMin() {
    let min = Number.MAX_VALUE;
    for (let key of Object.values(this.wages)) {
      if (min > key) {
        min = key;
      };
    };
    return min;
  },
};

console.log(`Средняя зарплата ${salary.calcMiddle()}`);

console.log(`Максимальная зарплата ${salary.calcMax()}`);

console.log(`Минимальная зарплата ${salary.calcMin()}`);