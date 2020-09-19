'use strict';
window.addEventListener('DOMContentLoaded', () => {
	const man = document.querySelector('#male'),
		  woman = document.querySelector('#female'),
		  resuilt = document.querySelector('.calculating__result span');
		
	let gender = 'female',
		ratio = '1.375',
		height, weight, age;
		

	function calcTotal(){
		if (!gender || !height || !weight || !age || !ratio){
			resuilt.textContent = '____';
			return;
		}
		if(gender === 'female') {
			resuilt.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			resuilt.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);

		}
	}
	calcTotal();
	function getStaticInformation(parentSelector, activeClass){
		const elements = document.querySelectorAll(`${parentSelector} div`);
		
		elements.forEach(elem => {
			elem.addEventListener('click', (evt) => {
				if (evt.target.getAttribute('data-radio')){
					ratio = +evt.target.getAttribute('data-radio');
				} else{
					gender = evt.target.getAttribute('id');
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

	getStaticInformation('#gender', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
	getDinamicInformation('#height');
	getDinamicInformation('#weight');
	getDinamicInformation('#age');
	
});