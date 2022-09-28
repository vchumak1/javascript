"use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },

    rememberMyFilms : function() {
        for (let i = 0; i < 2; i++) {

            if (personalMovieDB.count == "-1") {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка :(");
        }
    },

    showMyDB: function() {
        if (this.privat == false) {
            console.log(personalMovieDB);
            } else {
                console.log("Ничего не покажу!");
            }
    },

    toggleVisibleMyDB: function() {
        if (this.privat == true) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();
            if (genre != null && genre != '' && genre.length < 50) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
                console.log("Жанр введен не корректно"); 
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB());
personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB());