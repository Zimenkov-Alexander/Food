"use strict";

const personalMovieDB = {
	count: function () {
		let number = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (number == '' || number == null || isNaN(number)) {
			number = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
		return number;
	},
	movies: function () {

		let movies = {};
	
		for (let i = 0; i<2; i++){
			let nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
				scoreFilm = +prompt('На сколько оцените его?', '');
		
			if (nameFilm && scoreFilm && nameFilm != '' && scoreFilm != '' && nameFilm.length < 50){
				movies[nameFilm] = scoreFilm;
			} 
			else{
				i--;
			}
		}
		return movies;
	},
    actors: {},
    genres: function (){
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
		genreFilms.forEach((key, i) => console.log(`Любимый жанр №${i+1} - это ${key}`));
		return genreFilms;
	},
	privat: false,
	toggleVisibleMyDB: function(privatToggle){
		if (privatToggle){
			personalMovieDB.privat = false;
		} else{
			personalMovieDB.privat = true;
		}
	},
};


function detectPersonalLevel  () {
	if (personalMovieDB.count < 10) {
		alert ("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
		alert ("Вы классический зритель");
	} else if (personalMovieDB.count >= 30){
		alert ("Вы киноман");
	} else{
		alert ("Произошла ошибка");
	}
}

// detectPersonalLevel();

function showMyDB (privatToggle){
	if (!privatToggle){
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);


