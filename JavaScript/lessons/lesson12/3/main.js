'use strict';
const user = {
    display: '1440×900',
    JavaScript: 'Да',
    Flash: '32.0',
    OS: 'Windows8',
};

const {display:myDisplay, OS:myOS, browser:myBrowser = `Google chrome`} = user;

console.log(myDisplay, myOS, myBrowser);