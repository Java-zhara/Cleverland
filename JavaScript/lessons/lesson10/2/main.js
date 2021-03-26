"use strict";
function showSing() {
  if (words[words.length - 1] === '!') {
    return 'Предложение восклицательное'
  } else if (words[words.length - 1] === '?') {
    return 'Предложение вопросительное'
  } else if (words[words.length - 1] === '.') {
    return 'Предложение повествовательное'
  };
};

const words = prompt('Введите восклицательное, вопросительное или вопросительное предложение');

console.log(showSing());