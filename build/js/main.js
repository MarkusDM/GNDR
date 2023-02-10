"use strict";

const mainSlider = new Swiper('#main__swiper', {
    slidesPerView: 1,
    speed: 500,
    wrapperClass: 'main__swiper-wrapper',
    slideClass: 'main__slide',
    freeMode: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: true,
    autoplay: {
        delay: 7000,
    },
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
           
          </span>
        `;
      },
      el: '.main__bullets',
    },
   
});


const partnersSlider = new Swiper('#partners__swiper', {
    slidesPerView: 5,
    wrapperClass: 'partners__swiper-wrapper ',
    slideClass: 'partners__slide',
    spaceBetween: 17,
    loop: true,
    navigation: {
        prevEl: '.partners__prev',
        nextEl: '.partners__next',
      },
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
           
          </span>
        `;
      },
      el: '.partners__bullets',
    },
   
});