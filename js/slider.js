'use strict';


// ?Слайдер 1
// window.addEventListener('DOMContentLoaded', () => {

// 	let current = document.querySelector('#current'),
// 		total = document.querySelector('#total'),
// 		slideIndex = 1;

// 	const slides = document.querySelectorAll('.offer__slide'),
// 		  slider = document.querySelector('.offer__slider'),
// 		  btnNextSlide = document.querySelector('.offer__slider-next'),
// 		  btnPrevSlide = document.querySelector('.offer__slider-prev');

// 	btnNextSlide.addEventListener('click', () => {plusSlides(1);});
// 	btnPrevSlide.addEventListener('click', () => {plusSlides(-1);});

//     showSlides(slideIndex);

// 	if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//     } else {
//         total.textContent = slides.length;
//     }

//     function showSlides(n) {
//         if (n > slides.length) {
//             slideIndex = 1;
//         }
//         if (n < 1) {
//             slideIndex = slides.length;
//         }

//         slides.forEach((item) => item.classList.add('hide'));

//         slides[slideIndex - 1].classList.remove('hide');

//         if (slides.length < 10) {
//             current.textContent =  `0${slideIndex}`;
//         } else {
//             current.textContent =  slideIndex;
// 		}

// 		clearSelection();
//     }

//     function plusSlides (n) {
// 		showSlides(slideIndex += n);
// 	}

// 	function clearSelection() {
// 		if (slider.getSelection) {
// 		slider.getSelection().removeAllRanges();
// 		}
// 	  }
// });

// ?Слайдер 2
window.addEventListener('DOMContentLoaded', () => {

	let current = document.querySelector('#current'),
		total = document.querySelector('#total'),
		slideIndex = 1,
		offset = 0;

	const slides = document.querySelectorAll('.offer__slide'),
		sliderWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesField = document.querySelector('.offer__slider-inner'),
		slideWidth = window.getComputedStyle(sliderWrapper).width,
		btnNextSlide = document.querySelector('.offer__slider-next'),
		btnPrevSlide = document.querySelector('.offer__slider-prev');

	btnNextSlide.addEventListener('click', () => {
		if (offset == +slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += +slideWidth.slice(0, slideWidth.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		slideIndex++;
		сheckSlideIndex();

	});
	btnPrevSlide.addEventListener('click', () => {
		if (offset == 0) {
			offset = +slideWidth.slice(0, slideWidth.length - 2) * (slides.length - 1);
		} else {
			offset -= +slideWidth.slice(0, slideWidth.length - 2);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		slideIndex--;
		сheckSlideIndex();
	});
	сheckSlideIndex();
	addStylesSlider();


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
	}
});