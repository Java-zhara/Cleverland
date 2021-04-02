'use strict';

function getPlusDays(quantityDays) {

  const calcDays = 1000 * 3600 * 24;

  const datePlusDays = new Date(Date.now() + (quantityDays * calcDays));

  return `Число:${datePlusDays.getDate()} Месяц:${datePlusDays.getMonth() + 1} Год:${datePlusDays.getFullYear()}`;

};

console.log(getPlusDays(prompt('Введите количество дней')));