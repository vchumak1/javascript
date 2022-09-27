"use strict";

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: -1,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (numberOfFilms > 0) {
    personalMovieDB.count = numberOfFilms;
} else {
    console.log(`Информация о количестве просмотренных фильмов не получена и в объект не добавлена`);
}

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
    if (lastFilms != null && lastFilms.length < 50 && lastFilms.length > 0 && rating > 0) {
        personalMovieDB.movies[lastFilms] = rating;
        console.log("Информация о рейтинге и последнем просмотренном фильме добавлена в объект.");
    } else {
        console.log("Информации о последнем просмотренном фильме и его рейтинге не получено и в переменную не добавлено");
        i--;
        continue;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка :(");
}