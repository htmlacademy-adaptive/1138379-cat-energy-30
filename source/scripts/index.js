"use strict";

// menu
let menu = document.querySelector(".header__button-menu");
let inner = document.querySelector(".header__menu");

menu.onclick = function () {
  menu.classList.toggle("header__button-menu--open");
  menu.classList.toggle("header__button-menu--close");
  inner.classList.toggle("header__menu--show");
};

