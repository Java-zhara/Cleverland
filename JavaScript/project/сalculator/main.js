'use strict';

const input = document.querySelector('input');

const number = document.querySelectorAll('.num');

let result = 0;
let operation = '+';

const plus = document.querySelector('.plus');

const minus = document.querySelector('.minus');

const multiply = document.querySelector('.multiply');

const divide = document.querySelector('.divide');

const clean = document.querySelector('.clean');

const equal = document.querySelector('.equal');

const clickNumButton = function () {
    input.value = input.value + this.textContent;
}

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', clickNumButton);
}

const applyOperation = () => {
    if(operation === '+') {
        result += getInputNumber();
    } else if(operation === '-') {
        result -= getInputNumber();
    } else if(operation === '&times') {
        result *= getInputNumber();
    }else if(operation === '&divide') {
        result /= getInputNumber();
    }
    input.value = '';
}

const getInputNumber = () => {
    let inputValue = input.value;
    return new Number(inputValue);
}

const clickPlusButton = () => {    
    applyOperation();
    operation = '+';
}

const clickMinusButton = () => {    
    applyOperation();
    operation = '-';
}

const clickMultiplyButton = () => {    
    applyOperation();
    operation = '&times';
}

const clickDivideButton = () => {    
    applyOperation();
    operation = '&divide';
}

const clickCleanButton = () => {
    input.value = '';
    result = 0;
    operation = '+';
}

const clickEqualnButton = () => {    
    applyOperation();
    const stringResult = new String(result);
    clickCleanButton();
    input.value = stringResult;
}

plus.addEventListener('click', clickPlusButton);

minus.addEventListener('click', clickMinusButton);

multiply.addEventListener('click', clickMultiplyButton);

divide.addEventListener('click', clickDivideButton);

clean.addEventListener('click', clickCleanButton);

equal.addEventListener('click', clickEqualnButton);