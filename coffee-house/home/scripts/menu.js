import { menuData } from './menu-data.js';
import { hideExtraCards } from './refresh-btn.js';

const tabWrapper = document.querySelector('.tabs-wrapper');
const tabs = document.querySelectorAll('.btn-tab');
export const catalog = document.querySelector('.catalog-wrapper');

let curTab = 1;

function filterData(category) {
  return menuData.filter(data => data.category === `${category}`);
}

function pasteCards(id) {
  if (!catalog) return;
  
  catalog.innerHTML = '';
  let cards;

  if (id === 1) {
    cards = filterData('coffee');
  } else if (id === 2) {
    cards = filterData('tea');
  } else {
    cards = filterData('dessert');
  }

  cards.forEach((card, i) => {
    catalog.insertAdjacentHTML('beforeend', `
      <div class="catalog-card" id="${card.category}-${i + 1}">
        <div class="card-img-wrapper">
          <img src="../assets/img/${card.category}-${i + 1}.jpg" alt="${card.name}" class="card-img">
        </div>
        <div class="card-info">
          <div class="card-description">
            <h3 class="heading heading-tertiary">${card.name}</h3>
            <p class="text">${card.description}</p>
          </div>
            <p class="heading heading-tertiary">$${card.price}</p>
        </div>
      </div>`);
  });

  return cards;
}

function setActiveTab(tabId) {
  tabs.forEach(tab => tab.classList.remove('tab-active'));
  document.querySelector(`#tab-${tabId}`).classList.add('tab-active');
};

export function switchActiveTab() {
  tabWrapper.addEventListener('click', function(e) {
    const tabBtn = e.target.closest('.btn-tab');
    if (!tabBtn) return;
    
    const tabNumber = Number(tabBtn.id.slice(-1));
    setActiveTab(tabNumber);
    curTab = tabNumber;
    pasteCards(curTab);
    hideExtraCards();
  })
}

pasteCards(curTab);
