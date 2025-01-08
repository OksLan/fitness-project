// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import '../sass/vendor/swiper.scss';

/* свайпер блока JURI */
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

/* свайпер блока REVIEWS */
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
      clickable: true,
    },
  });

  reviewsSwiper.init();

/* переход к блоку PRICE при нажатии кнопки в блоке HERO */
document.addEventListener("DOMContentLoaded", () => {
  const heroButton = document.querySelector(".hero__button");
  const priceSection = document.querySelector(".price");

  if (heroButton && priceSection) {
    heroButton.addEventListener("click", () => {
    priceSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});


/* запуск видео блока ABOUT */
document.addEventListener("DOMContentLoaded", () => {
  const videoWrapper = document.querySelector(".about__video");
  const playButton = videoWrapper.querySelector(".play-button");

  if (videoWrapper && playButton) {
    playButton.addEventListener("click", () => {
    const videoUrl = videoWrapper.getAttribute("data-video");
      if (videoUrl) {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `${videoUrl}?autoplay=1`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.classList.add("about__iframe");

        videoWrapper.innerHTML = "";
        videoWrapper.appendChild(iframe);
      }
    });
  }
});
