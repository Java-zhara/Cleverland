'use strict';
const input = document.querySelector('input');

const number = document.querySelectorAll('.num');

let clickNumButton = function () {
    input.value = input.value + this.textContent;
}

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', clickNumButton);
}

let result = 0;
let operation = '+';

let applyOperation = function() {
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

let getInputNumber = function(){
    let inputValue = input.value;
    return new Number(inputValue);
}

const plus = document.querySelector('.plus');

let clickPlusButton = function () {    
    applyOperation();
    operation = '+';
}

plus.addEventListener('click', clickPlusButton);

const minus = document.querySelector('.minus');

let clickMinusButton = function () {    
    applyOperation();
    operation = '-';
}

minus.addEventListener('click', clickMinusButton);

const multiply = document.querySelector('.multiply');

let clickMultiplyButton = function () {    
    applyOperation();
    operation = '&times';
}

multiply.addEventListener('click', clickMultiplyButton);

const divide = document.querySelector('.divide');

let clickDivideButton = function () {    
    applyOperation();
    operation = '&divide';
}

divide.addEventListener('click', clickDivideButton);

const clean = document.querySelector('.clean');

let clickCleanButton = function () {
    input.value = '';
    result = 0;
    operation = '+';
}

clean.addEventListener('click', clickCleanButton);

const equal = document.querySelector('.equal');

let clickEqualnButton = function () {    
    applyOperation();
    const stringResult = new String(result);
    clickCleanButton();
    input.value = stringResult;
}

equal.addEventListener('click', clickEqualnButton);