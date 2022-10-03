"use strict";

let arr = [1, 2, 3];

const menu = document.querySelector(".menu_items"),
    inputForm = document.querySelector("form.add"),
    addItem = inputForm.querySelector(".adding__input");

inputForm.addEventListener("submit", event => {
    event.preventDefault();
    menu.innerHTML = "";
    let newItem = addItem.value;
    if (newItem) {
        arr.push(newItem);
        addElement();
    } else {
        addElement();
        console.log("Sorry");
        console.log(arr);
    }
});


function addElement() {
    arr.forEach(element => {
        menu.innerHTML += `
                    <div class="item">
                        <li>${element}</li>
                    </div>
                `;
    });
}

function removeElement() {
    menu.addEventListener("click", i => {
        menu.firstElementChild.remove();
        arr.splice(i);
    });
}

addElement();
removeElement();

//timer

const deadline = "2022-10-7";

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock(".timer", deadline);