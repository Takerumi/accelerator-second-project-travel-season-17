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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
    prevEl: '[data-tours-prev]',
    nextEl: '[data-tours-next]',
    disabledClass: 'slider-nav__btn--disabled'
  }
});

const instructorsSwiper = new Swiper('.instructors__slider', {
  direction: 'horizontal',
  loop: false,
  watchSlidesProgress: true,
  slideVisibleClass: 'instructors__slide--active',
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
    prevEl: '[data-instructors-prev]',
    nextEl: '[data-instructors-next]',
    disabledClass: 'slider-nav__btn--disabled'
  }
});

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,
  slideVisibleClass: 'reviews__slide--active',
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 0
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
    prevEl: '[data-reviews-prev]',
    nextEl: '[data-reviews-next]',
    disabledClass: 'slider-nav__btn--disabled'
  }
});

const gallerySlider = new Swiper('.gallery__slider', {
  direction: 'horizontal',
  loop: true,
  slideVisibleClass: 'gallery__slide--active',
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
    prevEl: '[data-gallery-prev]',
    nextEl: '[data-gallery-next]'
  }
});

export { heroSwiper, toursSwiper, instructorsSwiper, reviewsSlider, gallerySlider };
