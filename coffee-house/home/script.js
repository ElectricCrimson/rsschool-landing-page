import { toggleBurgerMenu } from './scripts/burger.js';

const body = document.querySelector('.body');
const headings = document.querySelectorAll('.heading');
const logoPaths = document.querySelectorAll('.logo-path');
const menuIcon = document.querySelector('.menu-icon');
const burgerBtn = document.querySelector('.burger');
const texts = document.querySelectorAll('.text');
const links = document.querySelectorAll('.link');
const btns = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer-contacts');

const switchBtn = document.querySelector('.btn-switch');

const pageId = body.id;

function switchColors() {
  body.classList.toggle('dark');
  headings.forEach(heading => heading.classList.toggle('dark-mode-text'));
  logoPaths.forEach(path => path.classList.toggle('dark-btn'));
  menuIcon.classList.toggle('dark-icon');
  burgerBtn.classList.toggle('dark-burger');
  texts.forEach(text => text.classList.toggle('dark-mode-text'));
  links.forEach(link => link.classList.toggle('dark-link'));
  btns.forEach(btn => btn.classList.toggle('dark-btn'));
  footer.classList.toggle('dark-footer');

  if (pageId === 'menu-page') {
    const tabs = body.querySelectorAll('.btn-tab');
    if (!tabs) return;
    tabs[0].classList.toggle('dark-tab-active');
    tabs.forEach(tab => tab.classList.toggle('dark-tab'));

    const refreshBtn = body.querySelector('.wrapper-icon');
    if (!refreshBtn) return;
    refreshBtn.classList.toggle('dark-icon');

    const menuCards = body.querySelectorAll('.catalog-card');
    if (!menuCards) return;
    menuCards.forEach(card => card.classList.toggle('dark-card'))
  }

  body.classList.contains('dark') ? setMode('dark') : setMode('light');
}

function setMode(mode) {
  localStorage.setItem('mode', mode);
}

function checkMode() {
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    switchColors();
  }
}

switchBtn.addEventListener('click', switchColors);

checkMode();

toggleBurgerMenu();
