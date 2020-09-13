window.addEventListener('DOMContentLoaded', () => {

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'Загрузка',
		success: 'Спасибо, скоро мы с вами свяжемся',
		failed: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		postData(item);
	});

	function postData(form){
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			
			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.append(statusMessage);

			const requst = new XMLHttpRequest();
			requst.open('POST', 'server.php');

			requst.setRequestHeader('Content-type', 'application/json');
			const formData = new FormData(form);
			const object = {};

			formData.forEach((value, key) => {
				object[key] = value;
			});

			const json =JSON.stringify(object);

			requst.send(json);

			requst.addEventListener('load', () => {
				if (requst.status === 200){
					console.log(requst.response);
					statusMessage.textContent = message.success;
					form.reset();
					setTimeout(() => {
						statusMessage.remove();
					}, 3000);
				
				} else{
					statusMessage.textContent = message.failed;
				}
			});
		});
	}
});