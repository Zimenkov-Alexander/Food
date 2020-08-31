"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
    actors: {},
    genres:[],
    privat: false
};

const lastFilms = {
	nameFilm1: prompt('Один из последних просмотренных фильмов?', ''),
	scoreFilm1: prompt('На сколько оцените его?', ''),
	nameFilm2: prompt('Один из последних просмотренных фильмов?', ''),
	scoreFilm2: prompt('На сколько оцените его?', '')
};	
personalMovieDB.movies[lastFilms.nameFilm1] = lastFilms.scoreFilm1;
personalMovieDB.movies[lastFilms.nameFilm2] = lastFilms.scoreFilm2;

console.log(personalMovieDB);