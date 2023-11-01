// Aos
AOS.init({
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    easing: 'ease'
});
//swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }
  });
  



////Navbar Js

const Navbar = document.querySelector(".navbar")
const Menu = document.querySelector(".menu")
Menu.addEventListener('click',()=>{
    Navbar.classList.toggle('show-menu')
})
