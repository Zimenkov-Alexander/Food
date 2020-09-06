"use strict";

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
movieDB.movies.sort();

// Задание 1
adsBlocks.forEach(item => item.remove());
adsTitle.textContent = '';

// Задание 2
promoGenre.textContent = 'ДРАМА';

// Задание 3
promoBg.style.cssText = "background-image: url(../image/bg.jpg)"; 

// Задание 4 и 5

promoInteractivelist.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    promoInteractivelist.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
        </li>
    `;
});