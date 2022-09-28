"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

const personalMovieDB = {
    count: -1,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        if (numberOfFilms == "-1") {
            console.log("Цикл завершен.");
            break;
        }
    
        const lastFilms = prompt("Один из последних просмотренных фильмов", ""),
              rating = +prompt("На сколько оцените его?", "");  
    
        if (lastFilms == "-1" || rating == "-1") {
            console.log("Цикл завершен.");
            break;
        }
        if (lastFilms != null && lastFilms.length < 50 && lastFilms.length > 0 && rating > 0 && !isNaN(rating)) {
            personalMovieDB.movies[lastFilms] = rating;
            console.log("Информация о рейтинге и последнем просмотренном фильме добавлена в объект.");
        } else {
            console.log("Информации о последнем просмотренном фильме и его рейтинге не получено и в переменную не добавлено");
            i--;
            continue;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка :(");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
    console.log(personalMovieDB);
    } else {
        console.log("Ничего не покажу!");
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre != null && genre != '' && genre.length < 50) {
            personalMovieDB.genres[i - 1] = genre;
        } else {
            i--;
            console.log("Жанр введен не корректно"); 
        }
    }
}

/* start();
rememberMyFilms();
detectPersonalLevel(); */
writeYourGenres();
showMyDB(personalMovieDB.private);