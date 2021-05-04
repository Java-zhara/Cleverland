'use strict';
const divNew = document.createElement('div');
document.body.append(divNew);

const div = document.querySelectorAll('div');

let a;
let b;

do {
    a = +prompt('Введите начало отсчета с большего числа', 5);
    b = +prompt('Введите число конца отсчета больше начального', 0);
} while (a < b || isNaN(a) || isNaN(b));

const printNumbers = (from, to) => {

    setTimeout(function go() {
        div[0].innerHTML = `Отсчет пошел: ${from}`;
        if (from > to) {
            setTimeout(go, 1000);
        }
        from--;
    }, 1000);
};

printNumbers(a, b);