'use strict';
document.body.insertAdjacentHTML('beforebegin', '<input type="number" value="">');

document.body.insertAdjacentHTML('beforebegin', '<input type="number" value="">');

document.body.insertAdjacentHTML('beforebegin', '<p>Нажмите на "Пуск"</p>');

document.body.insertAdjacentHTML('afterend', '<input type="button" value="Пуск">');

const button = document.querySelector('input');

let a;
let b;
let c;


const printNumbers = (from, to) => {

    div[0].innerHTML = `Отсчет пошел: ${from}`;
    if (from > to) {
        from--;
        a = from;
        c = setTimeout(printNumbers, 1000, a, b);
    } else {
        button.value === 'Пуск';
    }

};

const updateButton = () => {
    if (button.value === 'Пуск') {
        button.value = 'Пауза';
        c = a;
        printNumbers(a, b);
    } else {
        button.value = 'Пуск';
        clearTimeout(c);
    };
};

button.addEventListener('click', updateButton);