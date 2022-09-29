"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector(".wrapper");

console.dir(box);

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
} */

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");

div.classList.add("black");
wrapper.append(div);

div.innerHTML = "<h1>Hello World</h1>";
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");


//современные технологии:
/* document.body.append(div); */
/* wrapper.prepend(div); */
/* hearts[0].before(div); */
/* hearts[0].after(div); */
/* circles[0].remove(); */
/* hearts[0].replaceWith(circles[0]); */

//устаревшие технологии:
/* wrapper.appendChild(div); */
/* wrapper.insertBefore(div, hearts[0]); */
/* wrapper.removeChild(hearts[1]); */
/* wrapper.replaceChild(circles[0], hearts[0]); */




