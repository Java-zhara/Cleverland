'use strict';

function getWeekDay(date) {

  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];

};

const date = new Date(1986, 8, 26);

console.log(getWeekDay(date));

const dateNowYear = new Date(2021, 8, 26);

console.log(getWeekDay(dateNowYear));

const dateNow = Date.now();

const calcYears = 1000 * 3600 * 24 * 365;

const fullAge = dateNow - date;

console.log(Math.floor(fullAge / calcYears));

const daysBeforeBorth = dateNowYear - dateNow;

const calcDays = 1000 * 3600 * 24;

console.log(Math.floor(daysBeforeBorth / calcDays));