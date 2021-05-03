'use strict'

const counter = document.querySelector('.counter');
const startButton = document.querySelector('.button');
const startInput = document.querySelector('.start');
const finishInput = document.querySelector('.finish');

let a;
let b;

startButton.addEventListener('click', () => {
    if (startButton.classList.contains("button-active")) {
        if (startButton.value === 'Пуск') {
            startButton.value = 'Пауза';
            counter.classList.add("counter-active");
        } else {
            startButton.value = 'Пуск';
            counter.classList.remove("counter-active");
        };
        printNumber(a, b);
    } else {
        const pusk = getNumbers();
        if (pusk === true) {
            startButton.value = 'Пауза';
            printNumber(a, b);
        }
    }
});

const printNumber = (from, to) => {
    let timerId = setInterval(() => {
        if (from === to || !(counter.classList.contains("counter-active"))) {
            if (from === to) {
                startButton.classList.remove("button-active")
                counter.innerHTML = 'Поехали!';
                startButton.value = 'Пуск заново';
            }
            clearInterval(timerId);
        } else {
            counter.innerHTML = `Отсчет пошел: ${from}`;
            from--;
            a = from;
        }
    }, 1000);
};

const getNumbers = () => {
    if (!startInput.value || !finishInput.value) {
        return alert('Введите начало и конец отсчета');
    } else {
        a = Number(startInput.value);
        b = Number(finishInput.value);
        if (a < b) {
            return alert('Начальное значение должно быть больше конечного');
        } else {
            startButton.classList.add("button-active");
            counter.classList.add("counter-active");
            return true;
        };
    };
};