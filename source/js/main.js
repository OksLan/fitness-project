// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import '../sass/vendor/swiper.scss';

/* свайпер блока JURI*/
const juriSwiper = new Swiper('.juri__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    speed: 500,

    breakpoints: {
        1365: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        320: {
          slidesPerView: 1,
        },

      },

  // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
      clickable: true,
    },
  });

  juriSwiper.init();

/* свайпер блока REVIEWS*/
  const swiper_reviews = new Swiper('.reviews__list', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
      type: 'bullets',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
      clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  swiper_reviews.init();
