let hamburgerButton = document.querySelector('.hamburger-button');
let menu = document.querySelector('.header-nav');
let menuLink = document.querySelectorAll('.header-menu-link');
let heroLanguage = document.querySelector('.hero-language');

hamburgerButton.addEventListener('click', function() {
    menu.classList.toggle('mobile');
    heroLanguage.classList.toggle('mobile');
    hamburgerButton.classList.toggle('hamburger-button-close');
});
menuLink.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.toggle('mobile');
        heroLanguage.classList.toggle('mobile');
        hamburgerButton.classList.toggle('hamburger-button-close');
    });
});
