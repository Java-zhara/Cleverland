'use strict';
const trTableRepeat = document.querySelectorAll('tr');

for (let i = 0; i < trTableRepeat.length - 1; i++) {                     
    if (trTableRepeat[i].textContent === trTableRepeat[i + 1].textContent) { 
        trTableRepeat[i + 1].remove(); 
    };   
};

const cloneTableHead = document.querySelector('#violet').cloneNode(true);
cloneTableHead.removeAttribute('id');
cloneTableHead.classList.add('yellow');

const table =  document.querySelector('#graphik > tbody');
table.append(cloneTableHead);
table.insertAdjacentHTML('afterbegin', '<tr class="yellow"><td></td><td colspan="31">График дежурств сотрудников на август 2020 года</td></tr>');