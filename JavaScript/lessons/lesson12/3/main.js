'use strict';
let user = {
    display: '1440×900',
    JavaScript: 'Да',
    Flash: '32.0',
    OS: 'Windows8',
};

let {display, OS, browser = `Google chrome`} = user;

console.log(display, OS, browser);