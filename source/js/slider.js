import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const heroSwiper = new Swiper('.hero__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  watchSlidesProgress: true,
  slideVisibleClass: 'hero__slide--active',
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation, Pagination],
  navigation: {
  },
  pagination: {
    el: '.hero__pagination',
    bulletElement: 'button',
    clickable: true,
    bulletActiveClass: 'hero__dot--active',
    renderBullet: function (index, className) {
      const buttonClass = `hero__dot ${className}`;
      return `<button class="${buttonClass}" type="button">
        <span class="visually-hidden">Перейти к ${index + 1} слайду.</span>
      </button>`;
    }
  }
});

const toursSwiper = new Swiper('.tours__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  watchSlidesProgress: true,
  slideVisibleClass: 'tours__slide--active',
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
  },
});

const instructorsSwiper = new Swiper('.instructors__slider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  watchSlidesProgress: true,
  slideVisibleClass: 'instructors__slide--active',
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
  },
});

export { heroSwiper, toursSwiper, instructorsSwiper };
