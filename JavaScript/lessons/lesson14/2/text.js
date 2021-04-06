'use strict';
const red = document.getElementById('first');
red.style.backgroundColor = 'red';

const blue = document.getElementById('second');
blue.style.backgroundColor = 'blue';

const yellow = document.querySelectorAll('.yellow');
for (let i = 0; i < yellow.length; i++) {
    if (i === 0 || i === yellow.length - 1) {
        yellow[i].style.backgroundColor = 'yellow'
    } else {
        yellow[i].style.backgroundColor = 'green'
    };
}