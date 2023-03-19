"use strict";

if (4 == 6) {
    console.log('Ok!');
} else {
    console.log('Not ok!');
}

switch (50) {
    case 49: 
            console.log('Not ok!');
            break;
    case 51:
            console.log('Not ok!');
            break;
    case 50:
            console.log('Its Ok!');
            break;
    default:
            console.log('fake');
            break;
}