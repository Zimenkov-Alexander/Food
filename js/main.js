"use strict";

// ?Часть 1
const ads = document.querySelector('.promo__adv'),
	  adsBlocks= ads.querySelectorAll('img'),
	  adsTitle = ads.querySelector('.promo__adv-title'),
	  promoBg = document.querySelector('.promo__bg'),
	  promoGenre = promoBg.querySelector('.promo__genre'),
	  promoInteractivelist = document.querySelector('.promo__interactive-list');


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Задание 1
const deleteAdv = (arr) => {
	adsBlocks.forEach(item => item.remove());
	adsTitle.textContent = '';
};

// Задание 2,3
const makeChanges = () => {
	promoGenre.textContent = 'ДРАМА';

	promoBg.style.cssText = "background-image: url(image/bg.jpg)"; 
};

// Задание 4 и 5 и часть 2 Задание 3
const createMovieList = () => {
	promoInteractivelist.innerHTML = '';

	movieDB.movies.forEach((item, i) => {
		promoInteractivelist.innerHTML += `
			<li class="promo__interactive-item">${i+1}. ${item}
				<div class="delete"></div>
			</li>
		`;
	});
	document.querySelectorAll('.delete').forEach((btn, i) => {
		btn.addEventListener('click', () => {
			btn.parentElement.remove();
			movieDB.movies.splice(i, 1);
	
			createMovieList();
		});
	});
};

deleteAdv();
makeChanges();
createMovieList();


// ?Часть2
// Задание 1,2,4,5
const formAddFilm = document.querySelector('.add'),
	  nameFilm = formAddFilm.querySelector('.adding__input'),
	  topFilm = formAddFilm.querySelector('[type="checkbox"]');
	  
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

formAddFilm.addEventListener('submit', (evt)=>{
	evt.preventDefault();

	if (nameFilm.value != ""){
		let name = capitalizeFirstLetter(nameFilm.value);

		if (name.length > 21){
			name = name.substr(0, 22);
		}
		if (topFilm.checked){
			console.log ("Добавляем любимый фильм");
		}
		movieDB.movies.push(name);
		movieDB.movies.sort();

		createMovieList();
		
	} else{
		console.log('Вы не ввели название фильма');
	}
	evt.target.reset();
});