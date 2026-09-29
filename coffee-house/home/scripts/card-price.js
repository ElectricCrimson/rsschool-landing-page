import { modal } from './modal-window.js';

let curPrice = 0;

function formatPrice(num) {
  return `${num.toFixed(2)}`;
}

function countPrice(card, size, price) {
  const activeAdds = modal.querySelectorAll('.additives-wrapper .btn-modal-active');
  const addNum = 0.5;

  curPrice = parseFloat(card.price);
  curPrice += parseFloat(card.sizes[size]['add-price']);
  curPrice += activeAdds.length * addNum;
  price.textContent = `$${formatPrice(curPrice)}`;
}

function chooseOptions(card) {
  const sizeWrapper = modal.querySelector('.size-wrapper');
  const sizes = modal.querySelectorAll('.sizes-wrapper .btn-modal');
  const addsWrapper = modal.querySelector('.additives-wrapper');
  const price = modal.querySelector('.price');

  let curLetter = 's';

  sizeWrapper.addEventListener('click', function(e) {
    const curSize = e.target.closest('.btn-modal');
    if (!curSize) return;

    sizes.forEach(size => size.classList.remove('btn-modal-active'));
    curSize.classList.add('btn-modal-active');
    curLetter = `${curSize.querySelector('.size-icon').textContent.toLowerCase()}`;

    countPrice(card, curLetter, price);
  });

  addsWrapper.addEventListener('click', function(e) {
    const curAdd = e.target.closest('.btn-modal');
    if (!curAdd) return;

    curAdd.classList.toggle('btn-modal-active');
    countPrice(card, curLetter, price);
  });
}

export function showPrice(card) {
  const modalContent = modal.querySelector('.modal-content');
  if (!modalContent) return;

  chooseOptions(card);
}