'use strict';
const languages = document.querySelector('#languages');
languages.hidden = true;

const text = document.querySelectorAll('#languages > li')

for (let i = 0; i < text.length; i++) {
    console.log(text[i].textContent);
}