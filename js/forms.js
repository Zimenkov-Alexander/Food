'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'icons/spinner.svg',
		success: 'Спасибо, скоро мы с вами свяжемся',
		failed: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		postData(item);
	});

	function postData(form){
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

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(data => {
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
	

	fetch('db.json')
		.then(data => data.json())
		.then(res => console.log(res));
		
});