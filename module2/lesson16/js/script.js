"use strict";

const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button")[1];
console.log(btns);

const circles = document.getElementsByClassName("circle");
console.log(circles);

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item =>{
    console.log(item);
});

const oneHeart = document.querySelector(".heart");
console.log(oneHeart);

const div = document.querySelector("div");
console.log(div);


