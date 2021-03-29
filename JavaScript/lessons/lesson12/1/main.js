'use strict';
let experience = {
    'Jack': 1,
    'John': 2,
    'Pete': 8,
    'Mary': 20,
    'Sad': 29,
};

function calcMiddleExperience(experience) {
    let sum = 0;
    for (let ageExperience of Object.values(experience)) {
        sum += ageExperience;
    };
    const middleExperience = sum / Object.values(experience).length;
    return middleExperience;
};

console.log(`Средний стаж работы ${calcMiddleExperience(experience)}`);

const lessThanThree = Object.values(experience).filter(item => item < 3);

console.log(`Количество работников со стажем менее трех лет = ${lessThanThree.length}`);

const moreThanTwenty = Object.values(experience).filter(item => item >= 20);

console.log(`Количество работников со стажем более или равному двадцати годам = ${moreThanTwenty.length}`);