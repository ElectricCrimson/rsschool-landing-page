import { body } from '../script.js';
import { catalog } from './menu.js';
import { menuData } from './menu-data.js';
import { showPrice } from './card-price.js';

const modalBackground = document.querySelector('.modal-background');
export const modal = document.querySelector('.modal');

function filterCard(name) {
  return menuData.filter(card => card.name === `${name}`);
}

function pasteModalContent(card, id) {
  modal.innerHTML = '';
  modal.insertAdjacentHTML('beforeend', `
    <div class="modal-content">
      <div class="modal-img-wrapper">
        <img class="modal-img" src="../assets/img/${id}.jpg" alt="${card.name}">
      </div>
      <div class="modal-description">
        <div class="modal-heading-wrapper">
          <h3 class="heading heading-tertiary">${card.name}</h3>
          <p class="text">${card.description}</p>
        </div>
        <div class="size-wrapper">
          <p class="text">Size</p>
          <div class="sizes-wrapper">
            <a class="btn btn-modal btn-modal-active"><span class="size-icon">S</span>${card.sizes.s.size}</a>
            <a class="btn btn-modal"><span class="size-icon">M</span>${card.sizes.m.size}</a>
            <a class="btn btn-modal"><span class="size-icon">L</span>${card.sizes.l.size}</a>
          </div>
        </div>
        <div class="additive-wrapper">
          <p class="text">Additives</p>
          <div class="additives-wrapper">
            <a class="btn btn-modal"><span class="size-icon">1</span>${card.additives[0].name}</a>
            <a class="btn btn-modal"><span class="size-icon">2</span>${card.additives[1].name}</a>
            <a class="btn btn-modal"><span class="size-icon">3</span>${card.additives[2].name}</a>
          </div>
        </div>
        <div class="price-wrapper">
          <p class="heading heading-tertiary">Total:</p>
          <p class="heading heading-tertiary price">$${card.price}</p>
        </div>
        <div class="info-wrapper">
          <p class="text text-info">The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
        </div>
        <button class="btn btn-close">Close</button>
      </div>
    </div>
  `);
}

function openModalWindow() {
  modalBackground.classList.remove('hidden');
  body.style.overflow = 'hidden';
}

function closeModalWindow() {
  modalBackground.classList.add('hidden');
  body.style.overflow = '';
}

export function toggleModalWindow() {
  if (!catalog) return;

  catalog.addEventListener('click', function(e) {
    const card = e.target.closest('.catalog-card');
    if (!card) return;
    const curHeading = card.querySelector('h3').textContent;
    const [ curCard ] = filterCard(curHeading);

    openModalWindow();
    pasteModalContent(curCard, card.id);
    showPrice(curCard);
    
    const closeBtn = document.querySelector('.btn-close');
    if (!closeBtn) return;
    closeBtn.addEventListener('click', closeModalWindow);
  });

  modalBackground.addEventListener('click', function(e){
    if (e.target !== modalBackground) return;
    closeModalWindow();
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModalWindow();
  });
}
