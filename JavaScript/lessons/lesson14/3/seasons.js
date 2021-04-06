'use strict';
const seasons = document.querySelectorAll('ul > li');
for (let i = 0; i < seasons.length; i++) {
    if (i === 0) {
        seasons[i].style.backgroundColor = '#87CEEB'
    } else if (i === 1) {
        seasons[i].style.backgroundColor = '#008000'
    } else if (i === 2) {
        seasons[i].style.backgroundColor = '#FFFF00'
    } else {
        seasons[i].style.backgroundColor = '#FFA500'
    };
}