const body = document.querySelector('.body');
const burgerBtn = document.querySelector('.burger');
export const nav = document.querySelector('.nav');
const btnMenu = document.querySelector('.menu-link')


function closeMenu() {
  if (!nav.classList.contains('nav-active')) return;

  nav.classList.remove('nav-active');
  burgerBtn.classList.remove('burger-cross');
  body.style.overflow = '';
}

function toggleMenu() {
  burgerBtn.classList.toggle('burger-cross');
  nav.classList.toggle('nav-active');
  body.style.overflow = nav.classList.contains('nav-active') ? 'hidden' : '';
}

export function toggleBurgerMenu() {
  burgerBtn.addEventListener('click', toggleMenu);
  btnMenu.addEventListener('click', closeMenu);
  nav.addEventListener('click', function(e) {
    if (e.target.closest('.nav-item')) closeMenu();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
}
