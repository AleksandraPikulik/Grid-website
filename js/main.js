const nav = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');
const footer = document.querySelector('.footer__year');

// CHANGE CLASS IN NAV

const classNav = () => {
	burger.classList.toggle('is-active');
};

burger.addEventListener('click', classNav);

//  FOOTER YEAR

const changeYear = () => {
	const year = new Date().getFullYear();
	footer.innerText = year;
};

changeYear();

/*
const allNavLink = document.querySelectorAll('.nav__item');
const burgerBars = document.querySelector('.burger__bars');
const allSections = document.querySelectorAll('.section');

const handleNav = () => {
	nav.classList.toggle('nav--active');

    burgerBars.classList.remove('black-bars-color');

	allNavLink.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
	handleNavLinkAnimation();
};

const handleNavLinkAnimation = () => {
	let delayTime = 0;

	allNavLink.forEach((item) => {
		item.classList.toggle('nav-item-animation');

		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

burger.addEventListener('click', handleNav);

// NAV BURGER COLOR

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            burgerBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            burgerBars.classList.remove('black-bars-color')
        }
    })
}

window.addEventListener('scroll', handleObserver)

*/
