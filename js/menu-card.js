window.addEventListener('DOMContentLoaded', () => {

	class MenuCard {
		constructor(scr, alt, title, descr, prise, parentSelector){
			this.scr = scr;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.prise = prise;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27.6;
			this.changeToUAH();
		}

		changeToUAH() {
			this.prise = Math.floor(this.prise * this.transfer);
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
						<div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
			`;
			div.classList.add('menu__item');
			this.parent.append(div);
		}
	}

	const cards = {
		fitnessMenu: {
			scr: 'img/tabs/vegy.jpg',
			alt: 'vegy',
			title: 'Меню "Фитнес"',
			descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше'+
			'свежих овощей и фруктов. Продукт активных и здоровых людей.' + 
			'Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
			prise: 9
			},
		premiumMenu: {
				scr: 'img/tabs/elite.jpg',
				alt: 'elite',
				title: 'Меню “Премиум”',
				descr: 'В меню “Премиум” мы используем не только красивый дизайн упаковки,' +
				'но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты -' +
				'ресторанное меню без похода в ресторан!',
				prise: 14
			},
		leanMenu: {
			scr: 'img/tabs/post.jpg',
			alt: 'post',
			title: 'Меню "Постное"',
			descr: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие' +
			'продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки,' +
			'правильное количество белков за счет тофу и импортных вегетарианских стейков.',
			prise: 21
		}
	};

	function addCard (obj){
		for (let key in obj){
			new MenuCard(
				obj[key].scr,
				obj[key].alt,
				obj[key].title,
				obj[key].descr,
				obj[key].prise,
				'.menu .container'
			).render();
		}
	}
	addCard(cards);

});