"use strict";

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too much");
} else {
    console.log("Ok!");
}

(num == 50) ? console.log("Ok!") : console.log("Error");

const sw = 50;

switch (sw) {
    case 49:
        console.log("Wrong");
        break;
    case 100:
        console.log("Wrong");
        break;
    case 51:
        console.log("Ok!");
        break;
    default:
        console.log("Not now!");
        break;
}