import { switchMode } from './scripts/color-mode.js';
import { toggleBurgerMenu } from './scripts/burger.js';
import { switchSlide } from './scripts/slider.js';

const body = document.querySelector('.body');
const pageId = body.id;

switchMode();
toggleBurgerMenu();

if (pageId === 'home-page') {
  switchSlide();
};
