window.addEventListener('DOMContentLoaded', () => {

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
		})
});