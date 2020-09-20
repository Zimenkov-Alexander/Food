/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator () {
	const resuilt = document.querySelector('.calculating__result span');
		
	let gender, height, weight, age, radio;

	function calcTotal(){
		if (!gender || !height || !weight || !age || !radio){
			resuilt.textContent = '____';
			return;
		}
		if(gender === 'female') {
			resuilt.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * radio);
		} else {
			resuilt.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * radio);

		}
	}
	function getStaticInformation(selector, activeClass){
		const elements = document.querySelectorAll(selector);
		
		elements.forEach(elem => {
			elem.addEventListener('click', (evt) => {
				if (evt.target.getAttribute('data-radio')){
					radio = +evt.target.getAttribute('data-radio');
					localStorage.setItem('radio', +evt.target.getAttribute('data-radio'));
				} else{
					gender = evt.target.getAttribute('id');
					localStorage.setItem('gender', evt.target.getAttribute('id'));
				}
				elements.forEach(elem => {
					elem.classList.remove(activeClass);
				});
				evt.target.classList.add(activeClass);
				calcTotal();
			});
		});
	}
	function getDinamicInformation(selector){
		const input = document.querySelector(selector);

		input.addEventListener('input', () => {

			if (input.value.match(/\D/g)){
				input.classList.add('error');
			} else{
				input.classList.remove('error');

			}

			switch (input.getAttribute('id')){
				case 'height': 
					height = +input.value;
					break;
				case 'weight': 
					weight = +input.value;
					break;
				case 'age': 
					age = +input.value;
					break;	
			}
			calcTotal();
		});
	}
	function checkingValueInLocalStorage (name){
		if(localStorage.getItem(name)){
			if (name === 'gender'){
				gender = localStorage.getItem(name);
			} else{
				radio = localStorage.getItem(name);
			}
		} else {
			if (name === 'gender'){
				gender = 'female';
				localStorage.setItem(name, 'female');
			} else{
				radio = '1.375';
				localStorage.setItem(name, '1.375');
			}
		}
	}
	function initLocalSettings(selector, activeClass){
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.classList.remove(activeClass);
			
			if (elem.getAttribute('id') === localStorage.getItem('gender')){
				
				elem.classList.add(activeClass);
			}
			if (elem.getAttribute('data-radio') === localStorage.getItem('radio')) {
                elem.classList.add(activeClass);
            }
		});
	}
	

	checkingValueInLocalStorage('gender');
	checkingValueInLocalStorage('radio');

	initLocalSettings('#gender div', 'calculating__choose-item_active');
	initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
	
	getStaticInformation('#gender div', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
	
	getDinamicInformation('#height');
	getDinamicInformation('#weight');
	getDinamicInformation('#age');
	
	calcTotal();
}
module.exports = calculator;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms () {

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'icons/spinner.svg',
		success: 'Спасибо, скоро мы с вами свяжемся',
		failed: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch (url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		});

		return await res.json();
	};

	function bindPostData(form){
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			
			let statusMessage = document.createElement('img');
			statusMessage.scr = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
		
			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
			.then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
		});
	}

	function showThanksModal(message){
		
		const prevModalDialog = document.querySelector('.modal__dialog');
		const modal = document.querySelector('.modal');

		prevModalDialog.classList.add('hide');
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;
		
		modal.append(thanksModal);

		setTimeout(()=> {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			modal.classList.add('hide');
			modal.classList.remove('show');
			document.body.style.overflow = '';
		}, 4000);
	}
	

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));
		
}
module.exports = forms;

/***/ }),

/***/ "./js/modules/menu-card.js":
/*!*********************************!*\
  !*** ./js/modules/menu-card.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function MenuCard() {

	class MenuCard {
		constructor(scr, alt, title, descr, price, parentSelector){
			this.scr = scr;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27.6;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = Math.floor(this.price * this.transfer);
		}

		render() {
			const div = document.createElement('div');
			div.innerHTML = `
					<img src=${this.scr} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">${this.descr}
					</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			`;
			div.classList.add('menu__item');
			this.parent.append(div);
		}
	}

	const getResource = async (url) => {
		const res = await fetch (url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};
	getResource('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({img, altimg, title, descr, price}) => {
				new MenuCard(img,altimg,title,descr,price, '.menu .container').render();
			});
		});
}

module.exports = MenuCard;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal () {

	const modalOpenBtn = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalTimerId = setTimeout(modalToggle, (1000 * 60 * 3));

	function modalToggle () {
		modal.classList.toggle('show');
		modal.classList.toggle('hide');

		clearInterval(modalTimerId);

		if (modal.classList.contains('show')){
			document.body.style.overflow = 'hidden';
		} else{
			document.body.style.overflow = '';
		}
	}

	function showModalByScroll (){
		if (window.pageYOffset + document.documentElement.clientHeight >= document.
			documentElement.scrollHeight){
				modalToggle();
				window.removeEventListener('scroll', showModalByScroll);
		}
	}

	modalOpenBtn.forEach( (item) => {
		item.addEventListener('click', modalToggle);
	});

	modal.addEventListener('click', (evt) => {
		if (evt.target === modal || evt.target.getAttribute('data-close') == ""){
			modalToggle();
		}
	});
	
	document.addEventListener('keydown', (evt) =>{
		if (evt.code === 'Escape' && modal.classList.contains('show')){
			modalToggle();
		}
	});

	window.addEventListener('scroll', showModalByScroll);
}
module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider () {

	let current = document.querySelector('#current'),
		total = document.querySelector('#total'),
		slideIndex = 1,
		offset = 0;

	// Переменные по слайдеру
	const slides = document.querySelectorAll('.offer__slide'),
		  slider = document.querySelector('.offer__slider'),
		  sliderWrapper = document.querySelector('.offer__slider-wrapper'),
	 	  slidesField = document.querySelector('.offer__slider-inner'),
		  slideWidth = window.getComputedStyle(sliderWrapper).width;

	// Переменные по кнопкам навигаии
	const btnNextSlide = document.querySelector('.offer__slider-next'),
		  btnPrevSlide = document.querySelector('.offer__slider-prev'),
		  indicators = document.createElement('ol'),
		  dots = [];

	btnNextSlide.addEventListener('click', () => {
		if (offset == deleteNotDigits(slideWidth) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(slideWidth);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		slideIndex++;
		сheckSlideIndex();
		addStyleList();

	});
	btnPrevSlide.addEventListener('click', () => {
		if (offset == 0) {
			offset = deleteNotDigits(slideWidth) * (slides.length - 1);
		} else {
			offset -= deleteNotDigits(slideWidth);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		slideIndex--;
		сheckSlideIndex();
		addStyleList();
	});

	function сheckSlideIndex() {
		if (slides.length < 10) {
			total.textContent = `0${slides.length}`;
		} else {
			total.textContent = slides.length;
		}

		if (slideIndex > slides.length) {
			slideIndex = 1;
		} else if (slideIndex <= 0) {
			slideIndex = slides.length;
		}

		if (slideIndex < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}
	}
	function addStylesSlider() {
		slidesField.style.cssText = `
		display: flex;
		transition: 0.5s all
	`;
		slidesField.style.width = 100 * slides.length + '%';
		sliderWrapper.style.overflow = 'hidden';
		
		slides.forEach(slide => {
			slide.style.width = slideWidth;
		});

		slider.style.position = 'relative';
	}
	function creativeList(){
		indicators.classList.add('carousel-indicators');
		slider.append(indicators);
	
		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement('li');
			dot.setAttribute('data-slide-to', i + 1);
			dot.classList.add('dot');
	
			if (i == 0) {
				dot.style.opacity = 1;
			}
	
			indicators.append(dot);
			dots.push(dot);
		}
	}
	function addStyleList(){
		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex-1].style.opacity = 1;
	}
	function deleteNotDigits(str){
		return +str.replace(/\D/g, '');
	}
	
	сheckSlideIndex();
	addStylesSlider();
	creativeList();

	dots.forEach( dot => {
		dot.addEventListener('click', (evt) => {
			const slideTo = evt.target.getAttribute('data-slide-to');
			
			slideIndex = slideTo;
			offset = deleteNotDigits(slideWidth) * (slideTo- 1);

			slidesField.style.transform = `translateX(-${offset}px)`;
			сheckSlideIndex();
			addStyleList();
		});
	});
}
module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs () {
	
	const tabs = document.querySelectorAll('.tabheader__item'),
		  tabsContent = document.querySelectorAll('.tabcontent'),
		  tabsParent = document.querySelector('.tabheader__items');

	
	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0){
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) =>{
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')){
			tabs.forEach((item, i) => {
				if (target == item){
					hideTabContent();
					showTabContent(i);
				}				
			});
		}
	});
}
module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer () {
	const deadLine = '2020-09-20';

	function getTimeRemaining(endtime){
		const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
			
		return{
			'total':t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

	function setClock(selector, endtime){
		const timer = document.querySelector(selector),
			  days = timer.querySelector('#days'),
			  hours = timer.querySelector('#hours'),
			  minutes = timer.querySelector('#minutes'),
			  seconds = timer.querySelector('#seconds'),
			  timeInterval = setInterval(updateClock, 1000);
		
		 updateClock();
		  
		function updateClock(){
			const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);


			if (t.total <=0){
				clearInterval(timeInterval);
				timer.style.color = "red";
			}
		}
	}

	setClock('.timer', deadLine);
}
module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
	const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
		  calculator = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js"),
		  forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
		  menuCard = __webpack_require__(/*! ./modules/menu-card */ "./js/modules/menu-card.js"),
		  modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
		  slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
		  timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
	
		  tabs();
		  calculator();
		  forms();
		  menuCard();
		  modal();
		  slider();
		  timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map