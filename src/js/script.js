const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const percentages = document.querySelectorAll('.skills__rating-percentages');
const lines = document.querySelectorAll('.skills__rating-scale span');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

percentages.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
