const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-nav');

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);