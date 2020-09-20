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