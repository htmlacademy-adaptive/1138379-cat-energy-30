// menu
const button = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');

button.onclick = function () {
  button.classList.toggle('header__button--close');
  button.classList.toggle('header__button--open');
  menu.classList.toggle('header__menu--show');
};

// ymaps.ready(function(){
//   // Указывается идентификатор HTML-элемента.
//   const myMap = new ymaps.Map("first_map", {
//       center: [59.938679, 30.3230044],
//       zoom: 14,
//       controls : []
//   }),

//    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'images/map-pin.png',
//       // Размеры метки.
//       iconImageSize: [57, 53],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-26, -42]
//   });

// myMap.geoObjects.add(myPlacemark)
// });
