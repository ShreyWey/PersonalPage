const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}); 

const menuLink1 = document.querySelector('.navbar__item1');

menuLink1.addEventListener('click', function() {
    window.scrollTo({
        top: 1100,
        behavior: 'smooth'
      });
}); 

const menuLink2 = document.querySelector('.navbar__item2');

menuLink2.addEventListener('click', function() {
    window.scrollTo({
        top: 1900,
        behavior: 'smooth'
      });
}); 

const menuLink3 = document.querySelector('.navbar__item3');

menuLink3.addEventListener('click', function() {
    window.scrollTo({
        top: 2650,
        behavior: 'smooth'
      });
}); 