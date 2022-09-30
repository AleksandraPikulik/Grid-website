const navMobile = document.querySelector('.nav-mobile');
const navLink = document.querySelectorAll('.nav__link');
const burger = document.querySelector('.hamburger');
const footer = document.querySelector('.footer__year');

// CHANGE CLASS IN NAV

const classNav = () => {
	burger.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
	document.body.classList.toggle('sticky-body');

	navLink.forEach((link) => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			burger.classList.remove('is-active');
			document.body.classList.remove('sticky-body');
		});
	});
};

burger.addEventListener('click', classNav);

navLink.addEventListener('click', classNav);

//  FOOTER YEAR

const changeYear = () => {
	const year = new Date().getFullYear();
	footer.innerText = year;
};

changeYear();
