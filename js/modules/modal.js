function modal () {

	const modalOpenBtn = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalTimerId = setTimeout(modalToggle, (1000 * 60 * 3));

	function modalToggle () {
		modal.classList.toggle('show');
		modal.classList.toggle('hide');

		clearInterval(modalTimerId);

		if (modal.classList.contains('show')){
			document.body.style.overflow = 'hidden';
		} else{
			document.body.style.overflow = '';
		}
	}

	function showModalByScroll (){
		if (window.pageYOffset + document.documentElement.clientHeight >= document.
			documentElement.scrollHeight){
				modalToggle();
				window.removeEventListener('scroll', showModalByScroll);
		}
	}

	modalOpenBtn.forEach( (item) => {
		item.addEventListener('click', modalToggle);
	});

	modal.addEventListener('click', (evt) => {
		if (evt.target === modal || evt.target.getAttribute('data-close') == ""){
			modalToggle();
		}
	});
	
	document.addEventListener('keydown', (evt) =>{
		if (evt.code === 'Escape' && modal.classList.contains('show')){
			modalToggle();
		}
	});

	window.addEventListener('scroll', showModalByScroll);
}
export default modal;