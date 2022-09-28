"use strict";

const arr = [10, 2, 13, 26, 8];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


arr[99] = 0;
console.log(arr.length);

for (let value of arr) {
    console.log(value);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));