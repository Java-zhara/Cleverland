'use strict';
const divNew = document.createElement('div');
document.body.append(divNew);

const div = document.querySelectorAll('div');

let a;
let b;
let c;

do {
    a = +prompt('Введите начало отсчета с большего числа', 10);
    b = +prompt('Введите число конца отсчета больше начального', 0);
} while (a < b || isNaN(a) || isNaN(b));

const printNumbers = (from, to) => {

    div[0].innerHTML = `Отсчет пошел: ${from}`;
    if (from > to) {
        from--;
        a = from;
        c = setTimeout(printNumbers, 1000, a, b);
    } else {
        button.value === 'Пуск';
        a = c;
    }

};

document.body.insertAdjacentHTML('beforebegin', '<p>Нажмите на "Пуск"</p>');

document.body.insertAdjacentHTML('afterend', '<input type="button" value="Пуск">');

const button = document.querySelector('input');

button.addEventListener('click', updateButton);

function updateButton() {
    if (button.value === 'Пуск') {
        button.value = 'Пауза';
        c = a;
        printNumbers(a, b);
    } else {
        button.value = 'Пуск';
        clearTimeout(c);
    };
};