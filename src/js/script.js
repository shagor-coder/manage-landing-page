
const mainHeader = document.querySelector('.main-header');


window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('active', scrollY > 10);
})

const mobileMenu = document.querySelector('.nav__menu')

const mobileToggle = document.querySelector('.nav__toggle')

const scrollLock = document.querySelector('body');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    scrollLock.classList.toggle('active')
})

const navLink = document.querySelectorAll('.nav__menu__link');

navLink.forEach(function(navLink){
    navLink.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        scrollLock.classList.remove('active')
    })
})

// Swiper Js

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    loop : true,
    time: 1500
});