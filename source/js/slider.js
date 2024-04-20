import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const heroSwiper = new Swiper('.hero__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  modules: [Navigation],
  navigation: {
  },
});

export { heroSwiper };
