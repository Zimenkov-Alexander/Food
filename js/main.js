"use strict";



const numberOfFilms = function () {
    let number = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number == '' || number == null || isNaN(number)) {
        number = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
	return number;
};

const personalMovieDB = {
	count: numberOfFilms(),
	movies: {},
    actors: {},
    genres:[],
    privat: false
};

const rememberMyFilms = function () {
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
};

rememberMyFilms();

const detectPersonalLevel = function () {
	if (personalMovieDB.count < 10) {
		alert ("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
		alert ("Вы классический зритель");
	} else if (personalMovieDB.count >= 30){
		alert ("Вы киноман");
	} else{
		alert ("Произошла ошибка");
	}
};

detectPersonalLevel();

const showMyDB = function(privat){
	if (!privat){
		console.log(personalMovieDB);
	}
};
showMyDB(personalMovieDB.privat);

const writeYourGenres = function (){
	let genreFilms = []; 
	let genre;
	for (let i = 0; i < 3; i++){
		genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
		if (genre && genre != '' && genre.length < 15){
			genreFilms.push(genre);
		} 
		else{
			i--;
		}
	}
	return genreFilms;
};

let topGenre = writeYourGenres();
