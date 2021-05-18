'use strict';

const addElements = () => {
    let form = document.createElement("form")
    form.id = "formid";
    form.style.display = 'block'
    form.style.flexDirection = 'row'
    form.style.alignItems = 'center'

    let btn = document.createElement("input")
    btn.setAttribute("type", "button")
    btn.className = "form-btn";
    btn.value = "Пуск";

    let info = document.createElement("p")
    info.className = "form-info"

    let control = document.createElement("div")
    control.className = "form-control"

    let display = document.createElement("div")
    display.className = "form-display"
    display.style.display = 'block';
    display.style.flexDirection = 'row'
    display.style.alignItems = 'center'
    display.style.justifyContent = 'center'
    display.style.width = "100%"
    display.innerHTML = "Введите цифры начала и окончания отсчета"

    let formelement = (tag, type, classname, id, lfor, ltext) => {
        let input = document.createElement(tag);
        input.setAttribute("type", type);
        input.setAttribute("value", "0")
        input.className = classname;
        input.id = id;

        let label = document.createElement("label")
        label.style.paddingRight = '50px'
        label.style.width = '150px'
        label.setAttribute("for", lfor)
        label.innerText = ltext

        let wrap = document.createElement("div")
        wrap.style.display = 'flex'
        wrap.style.flexDirection = 'row'
        wrap.style.justifyContent = 'flex-start'
        wrap.style.alignItems = 'center'
        control.appendChild(wrap)
        wrap.appendChild(label)
        wrap.appendChild(input)

    }

    document.body.appendChild(form)
    form.appendChild(control)
    formelement("input", "number", "start", "start", "start", "Нaчало отсчета")
    formelement("input", "number", "finish", "finish", "finish", "Конец отсчета")
    control.appendChild(btn)
    control.appendChild(info)
    form.appendChild(display)
}
addElements();

const startInput = document.querySelector('.start')
const finishInput = document.querySelector('.finish')
const startButton = document.querySelector('.form-btn')
const info = document.querySelector('.form-info')
const display = document.querySelector('.form-display')
let a, b, timerId;

document.querySelectorAll('input[type="number"]').forEach(function (item) {
    item.addEventListener('change', () => {
        a = Number(startInput.value)
        b = Number(finishInput.value)
        if (a > b) {
            info.innerHTML = "Данные введены верно"
            startButton.setAttribute('title', 'Запустить отсчет')
        } else {
            info.innerHTML = "Нaчало отсчета должно быть больше окончания"
            startButton.setAttribute('title', 'Введите корректные данные')
        }
    })
})

const print = (from, to) => {
    timerId = setInterval(() => {
        if (from === to) {
            display.innerHTML = 'Для перезапуска введите данные и нажмите "Пуск"'
            startButton.value = 'Пуск';
            a = Number(startInput.value)
            startInput.removeAttribute("disabled")
            finishInput.removeAttribute("disabled")
            clearInterval(timerId);
        } else {
            display.innerHTML = `Отсчет пошел: ${from}`
            from--;
            a = from;
        }
    }, 1000)
};

startButton.addEventListener('click', () => {
    if (startButton.value === "Пуск") {
        startButton.value = 'Пауза'
        print(a, b)
        startButton.setAttribute('title', 'Остановить отсчет')
    } else {
        startButton.value = 'Пуск'
        clearTimeout(timerId)
        startButton.setAttribute('title', 'Запустить отсчет')
    }
});