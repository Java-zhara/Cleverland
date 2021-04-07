'use strict';
const div = document.querySelectorAll('div');
console.log(div[0].innerHTML);
console.log(div[0].outerHTML);
div[0].innerHTML += 'Простота — залог надежности';