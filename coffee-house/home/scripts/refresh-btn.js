import { catalog } from './menu.js';
const refreshBtn = document.querySelector('#menu .wrapper-icon')

export function hideExtraCards() {
  if (!catalog) return;
  const cards = catalog.querySelectorAll('.catalog-card');
  const curLength = cards.length;
  const mediaWidth = window.matchMedia('(max-width: 768px)');

  if (mediaWidth.matches && curLength > 4) {
    refreshBtn.style.display = 'flex';
    cards.forEach((card, i) => {
      if (i >= 4) {
        card.style.display = 'none';
      }
    });

    refreshBtn.addEventListener('click', showExtraCards);
  } else {
    showExtraCards();
  }
}

function showExtraCards() {
  if (!catalog) return;
  const cards = catalog.querySelectorAll('.catalog-card');
  cards.forEach((card) => card.style.display = 'flex');
  refreshBtn.style.display = 'none';
}

window.addEventListener('resize', hideExtraCards);
