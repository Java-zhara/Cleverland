'use strict';
const input = document.querySelector('input');

input.setAttribute('id', 'button');
console.log(input.hasAttribute('id'));

input.setAttribute('value', 'Жми');
console.log(input.hasAttribute('value'));

console.log(input.getAttribute('maxlength'));

console.log(input.hasAttribute('value'));

input.setAttribute('type', 'button');
console.log(input.getAttribute('type'));

input.setAttribute('onclick', 'alert("Привет!!!")');

input.removeAttribute('maxlength');
console.log(input.hasAttribute('maxlength'));