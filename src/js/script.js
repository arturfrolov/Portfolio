const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percentages = document.querySelectorAll('.skills__rating-percentages'),
        lines = document.querySelectorAll('.skills__rating-scale span');

percentages.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
