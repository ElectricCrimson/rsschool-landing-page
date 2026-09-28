import { switchMode } from './scripts/color-mode.js';
import { toggleBurgerMenu } from './scripts/burger.js';
import { switchSlide } from './scripts/slider.js';
import { switchActiveTab } from './scripts/menu.js';
import { toggleModalWindow } from './scripts/modal-window.js';

export const body = document.querySelector('.body');
export const pageId = body.id;

switchMode();
toggleBurgerMenu();

if (pageId === 'home-page') {
  switchSlide();
};

if (pageId === 'menu-page') {
  switchActiveTab();
  toggleModalWindow();
}
