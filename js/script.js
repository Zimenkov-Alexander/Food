'use strict';

import tabs from './modules/tabs';
import calculator from './modules/calculator';
import forms from './modules/forms';
import menuCard from './modules/menu-card';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
		  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
		  calculator();
		  forms();
		  menuCard();
		  modal();
		  timer('.timer', '2022-08-02');
		  slider({
			container:'.offer__slider',
			slide: '.offer__slide',
			nextArrow: '.offer__slider-next',
			prevArrow: '.offer__slider-prev',
			totalCounter: '#total',
			corruntCounter: '#current',
			wrapper: '.offer__slider-wrapper',
			field: '.offer__slider-inner'
		  });
});