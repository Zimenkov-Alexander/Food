window.addEventListener('DOMContentLoaded', () => {
	const tabs = require('./modules/tabs'),
		  calculator = require('./modules/calculator'),
		  forms = require('./modules/forms'),
		  menuCard = require('./modules/menu-card'),
		  modal = require('./modules/modal'),
		  slider = require('./modules/slider'),
		  timer = require('./modules/timer');
	
		  tabs();
		  calculator();
		  forms();
		  menuCard();
		  modal();
		  slider();
		  timer();
});