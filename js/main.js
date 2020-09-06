"use strict";

const ad = document.querySelector('.promo__adv'),
	  adBlocks= ad.querySelectorAll('img'),
	  adTitle = ad.querySelector('.promo__adv-title'),
	  promoBg = document.querySelector('.promo__bg'),
	  promoGenre = promoBg.querySelector('.promo__genre'),
	  promoInteractiveItems = document.querySelectorAll('.promo__interactive-item');


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

// Задание 1
adBlocks.forEach(item => item.remove());
adTitle.textContent = '';

// Задание 2
promoGenre.textContent = 'ДРАМА';

// Задание 3
promoBg.style.cssText = "background-image: url(../image/bg.jpg)"; 

// Задание 4 и 5
promoInteractiveItems.forEach((item, i) => (
	item.textContent = `${i+1}. ${movieDB.movies[i]}.`
));