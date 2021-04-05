'use strict';
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
    table.rows[table.rows.length - 1 - i].cells[i].style.backgroundColor = 'red';
}