// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import '../sass/vendor/swiper.scss';

const swiper = new Swiper('.juri__list', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    breakpoints: {
        1365: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },

      },

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

  swiper.init();

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