'use strict';

window.addEventListener('DOMContentLoaded', () => {

	let current = document.querySelector('#current'),
		total = document.querySelector('#total'),
		slideIndex = 1;

	const slides = document.querySelectorAll('.offer__slide'),
		  slider = document.querySelector('.offer__slider'),
		  btnNextSlide = document.querySelector('.offer__slider-next'),
		  btnPrevSlide = document.querySelector('.offer__slider-prev');
	
	btnNextSlide.addEventListener('click', () => {plusSlides(1);});
	btnPrevSlide.addEventListener('click', () => {plusSlides(-1);});

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.classList.add('hide'));

        slides[slideIndex - 1].classList.remove('hide');
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
		}

		total.textContent = `0${slides.length}`;

		clearSelection();
    }

    function plusSlides (n) {
		showSlides(slideIndex += n);
	}
	
	function clearSelection() {
		if (slider.getSelection) {
		slider.getSelection().removeAllRanges();
		}
	  }
});