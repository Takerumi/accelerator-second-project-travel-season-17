import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const heroSwiper = new Swiper('.hero__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  watchSlidesProgress: true,
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

export { heroSwiper };
