// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import '../sass/vendor/swiper.scss';

/* HERO - при нажатии кнопки переход к блоку PRICE */
document.addEventListener("DOMContentLoaded", () => {
  const heroButton = document.querySelector(".hero__button");
  const priceSection = document.querySelector(".price");

  if (heroButton && priceSection) {
    heroButton.addEventListener("click", () => {
    priceSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});

/* ABOUT - запуск видео */
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

/* PRICES - изменение tab/цены */
document.addEventListener("DOMContentLoaded", () => {
  const priceTabs = document.querySelectorAll(".price__tab");
  const prices = {
    1: { trainer: 5000, daytime: 1700, fullday: 2700 },
    6: { trainer: 30000, daytime: 10200, fullday: 16200 },
    12: { trainer: 60000, daytime: 20400, fullday: 32400 },
  };

  const updatePrices = (duration) => {
    const trainerCard = document.querySelector('[data-card="trainer"] .price__card-price-real');
    const daytimeCard = document.querySelector('[data-card="daytime"] .price__card-price-real');
    const fulldayCard = document.querySelector('[data-card="fullday"] .price__card-price-real');

    if (trainerCard) trainerCard.textContent = prices[duration].trainer;
    if (daytimeCard) daytimeCard.textContent = prices[duration].daytime;
    if (fulldayCard) fulldayCard.textContent = prices[duration].fullday;
  };

  priceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      priceTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const duration = tab.getAttribute("data-duration");
      updatePrices(duration);
    });
  });

  updatePrices(1);
});

/* JURI свайпер */
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

/* FAQ - переключение табов */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".faq__tab");
  const panels = document.querySelectorAll(".faq__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      tab.classList.add("active");

      const targetId = tab.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});

/* REVIEWS свайпер */
const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
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

/* FORM - проверка ввода данных в поля Имя и Телефон */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form__boxes");
  const nameInput = form.querySelector('input[placeholder="Имя"]');
  const phoneInput = form.querySelector('input[placeholder="Телефон"]');
  const nameEmptyMessage = form.querySelector(".form__box-name .message-empty");
  const nameWrongSymbolsMessage = form.querySelector(".form__box-name .wrong-symbols");
  const phoneEmptyMessage = form.querySelector(".form__box-phone .message-empty");
  const phoneWrongSymbolsMessage = form.querySelector(".form__box-phone .wrong-symbols");

  const hideAllMessages = () => {
    nameEmptyMessage.style.display = "none";
    nameWrongSymbolsMessage.style.display = "none";
    phoneEmptyMessage.style.display = "none";
    phoneWrongSymbolsMessage.style.display = "none";
    nameInput.classList.remove("error");
    phoneInput.classList.remove("error");
  };

  form.addEventListener("submit", (event) => {
    let isValid = true;

    hideAllMessages();

    // ИМЯ
    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
      nameEmptyMessage.style.display = "block";
      nameInput.classList.add("error");
      isValid = false;
    } else if (!/^[А-Яа-яЁёA-Za-z\s]+$/.test(nameValue)) {
      nameWrongSymbolsMessage.style.display = "block";
      nameInput.classList.add("error");
      isValid = false;
    }

    // ТЕЛЕФОН
    const phoneValue = phoneInput.value.trim();
    if (phoneValue === "") {
      phoneEmptyMessage.style.display = "block";
      phoneInput.classList.add("error");
      isValid = false;
    } else if (!/^\d+$/.test(phoneValue)) {
      phoneWrongSymbolsMessage.style.display = "block";
      phoneInput.classList.add("error");
      isValid = false;
    }

    // не отправлять с ошибками
    if (!isValid) {
      event.preventDefault();
    }
  });

  // скрывать error-message при focus на input
  nameInput.addEventListener("focus", () => {
    nameInput.classList.remove("error");
    hideAllMessages();
  });
  phoneInput.addEventListener("focus", () => {
    phoneInput.classList.remove("error");
    hideAllMessages();
  });
});

/* клик на logo в header/footer не обновляет страницу */
document.addEventListener("DOMContentLoaded", () => {
  const disableLinkDefault = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
  };

  disableLinkDefault(".hero__header-logo");
  disableLinkDefault(".footer__logo");
});

