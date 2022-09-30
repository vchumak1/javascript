"use strict";

/* console.log(document.querySelector("#current").parentNode);
console.log(document.querySelector("[data-current='3']").nextSibling); */


for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}