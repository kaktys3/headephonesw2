const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let titleButton = document.querySelector('.div-header-general-modal-button-start');
let modalWindows = document.querySelector('.nav');
let divMain2GeneralButton = document.querySelector('.div-header-general-modal-button-end');

titleButton.addEventListener('click', () => {
    modalWindows.classList.add('active');
});

divMain2GeneralButton.addEventListener('click', (e) => {
    modalWindows.classList.remove('active');
});

titleButton.addEventListener('click', () => {
  divMain2GeneralButton.classList.add('active-middle');
});

titleButton.addEventListener('click', () => {
  titleButton.classList.add('active-end');
});

divMain2GeneralButton.addEventListener('click', (e) => {
  titleButton.classList.remove('active-end');
});

divMain2GeneralButton.addEventListener('click', (e) => {
  divMain2GeneralButton.classList.remove('active-middle');
});