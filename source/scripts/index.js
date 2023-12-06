// menu
const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');

button.onclick = function () {
  button.classList.toggle('header__button--close');
  button.classList.toggle('header__button--open');
  menu.classList.toggle('header__menu--show');
};
