const burgerButton = document.querySelector('.page-header__toggle');
const navMenu = document.querySelector('.navigation');

const toggleMenu = () => {
  const isMenuOpened = navMenu.classList.contains('navigation--opened');
  if (isMenuOpened) {
    navMenu.classList.remove('navigation--opened');
    navMenu.classList.add('navigation--closed');
    burgerButton.classList.toggle('page-header__toggle--closed');
    burgerButton.classList.toggle('page-header__toggle--opened');
  } else {
    navMenu.classList.add('navigation--opened');
    navMenu.classList.remove('navigation--closed');
    burgerButton.classList.toggle('page-header__toggle--closed');
    burgerButton.classList.toggle('page-header__toggle--opened');
  }
};

const bindMenuListener = () => {
  burgerButton.addEventListener('click', toggleMenu);
};

export { bindMenuListener };
