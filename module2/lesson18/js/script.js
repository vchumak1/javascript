"use strict";

const btn = document.querySelector("button"),
      overlay = document.querySelector(".overlay");
let i = 0;
const del = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
/*     i++;
    if (i == 1) {
        btn.removeEventListener("click", del);
    } */
};

btn.addEventListener("click", del, {once: true});
overlay.addEventListener("click", del);

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});




/* btn.onclick = function() {
    alert("Click");
};

btn.onclick = function() {
    alert("2ndClick");
}; */