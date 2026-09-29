import { modal } from './modal-window.js';

let curPrice = 0;

function formatPrice(num) {
  return `${num.toFixed(2)}`;
}

function countPrice(card, size, price) {
  curPrice = parseFloat(card.price);
  curPrice += parseFloat(card.sizes[size]['add-price']);
  price.textContent = `$${formatPrice(curPrice)}`;
}

function chooseSize(card) {
  const sizeWrapper = modal.querySelector('.size-wrapper');
  const sizes = modal.querySelectorAll('.sizes-wrapper .btn-modal');

  let curLetter = 's';

  sizeWrapper.addEventListener('click', function(e) {
    const curSize = e.target.closest('.btn-modal');
    if (!curSize) return;
    const price = modal.querySelector('.price');

    sizes.forEach(size => size.classList.remove('btn-modal-active'));
    curSize.classList.add('btn-modal-active');
    curLetter = `${curSize.querySelector('.size-icon').textContent.toLowerCase()}`;

    countPrice(card, curLetter, price);
  });

  return curPrice;
}

export function showPrice(card) {
  const modalContent = modal.querySelector('.modal-content');
  if (!modalContent) return;

  chooseSize(card);
}