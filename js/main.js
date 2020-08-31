"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
    actors: {},
    genres:[],
    privat: false
};

for (let i = 0; i<2; i++){
	let nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
		scoreFilm = +prompt('На сколько оцените его?', '');

	if (nameFilm && scoreFilm && nameFilm != '' && scoreFilm != '' && nameFilm.length < 50){
		personalMovieDB.movies[nameFilm] = scoreFilm;
	} 
	else{
		i--;
	}
}

if (personalMovieDB.count < 10) {
	alert ("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
	alert ("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
	alert ("Вы киноман");
} else{
	alert ("Произошла ошибка");
}

console.log(personalMovieDB);