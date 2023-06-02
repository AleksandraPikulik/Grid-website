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

// ADD BACKGROUND COLOR TO NAV WITH SCROLLTOP

document.addEventListener('DOMContentLoaded', () => {
	const navDesktop = document.querySelector('.nav-desktop');

	function addBgc() {
		if (window.scrollY >= 220) {
			navDesktop.classList.add('shadow-bgc');
		} else {
			navDesktop.classList.remove('shadow-bgc');
		}
	}

	window.addEventListener('scroll', addBgc);
});

//  FOOTER YEAR

const changeYear = () => {
	const year = new Date().getFullYear();
	footer.innerText = year;
};

changeYear();
