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