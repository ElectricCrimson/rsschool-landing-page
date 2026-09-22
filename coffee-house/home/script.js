const body = document.querySelector('.body');
const headings = document.querySelectorAll('.heading');
const menuIcon = document.querySelector('.menu-icon');
const texts = document.querySelectorAll('.text');
const links = document.querySelectorAll('.link');
const btns = document.querySelectorAll('.btn');
const refreshBtn = document.querySelector('wrapper-icon');
const footer = document.querySelector('.footer-contacts');

const switchBtn = document.querySelector('.btn-switch');
const switchBtnLight = document.querySelector('.switch-light');
const switchBtnDark = document.querySelector('.switch-dark');

const pageType = body.id;

function switchColors() {
  body.classList.toggle('dark');
  headings.forEach(heading => heading.classList.toggle('dark-mode-text'));
  menuIcon.classList.toggle('dark-icon');
  texts.forEach(text => text.classList.toggle('dark-mode-text'));
  links.forEach(link => link.classList.toggle('dark-link'));
  btns.forEach(btn => btn.classList.toggle('dark-btn'));
  footer.classList.toggle('dark-footer');

  if (pageType === 'menu-page') {
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
}

switchBtn.addEventListener('click', switchColors);
