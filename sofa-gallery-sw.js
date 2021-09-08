


////best seller slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
  loopFillGroupWithBlank: true,
 autoplay: {
    delay: 7500, 
   
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesPerGroup: 3
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 4
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});











