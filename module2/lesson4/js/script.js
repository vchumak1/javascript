"use strict";

//alert('Hello');

/* const result = confirm("Are you here?");
console.log(result); */

/* const answer = +prompt("Вам есть 18 лет?", "");
console.log(answer + 5); */

const answers = [];
console.log(typeof(answers));

answers[0] = prompt("Как Ваше имя?", "");
answers[1] = prompt("Какая Ваша фамилия?", "");
answers[2] = prompt("Сколько Вам лет?", "");

document.write(answers);
