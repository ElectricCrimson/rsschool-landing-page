const slides = document.querySelectorAll('.slider-item');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const pagination = document.querySelector('.pagination-wrapper');
const paginationLines = document.querySelectorAll('.pagination-item');

let curSlide = 0;
const lastSlide = slides.length;

function changeSlide(slide) {
  slides.forEach((slideItem, i) => {
    slideItem.style.transform = `translateX(${100 * (i - slide)}%)`;
    slideItem.style.transition = 'all 0.6s ease-in-out';
  });
}

function nextSlide() {
  if (curSlide === lastSlide - 1) {
    curSlide = 0;
  } else {
    curSlide += 1;
  }

  changeSlide(curSlide);
  setActiveLine(curSlide + 1);
}

function prevSlide() {
  if (curSlide === 0) {
    curSlide = lastSlide - 1;
  } else {
    curSlide -= 1;
  }

  changeSlide(curSlide);
  setActiveLine(curSlide + 1);
}

function setActiveLine(curId) {
  paginationLines.forEach(line => line.classList.remove('pagination-active'));
  document.querySelector(`#pag-${curId}`).classList.add('pagination-active');
}

export function switchSlide() {
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  pagination.addEventListener('click', function(e) {
    if (e.target.classList.contains('pagination-item')) {
      const slideNumber = Number(e.target.id.slice(-1));
      changeSlide(slideNumber - 1);
      setActiveLine(slideNumber);
      curSlide = slideNumber - 1;
    }
  })
}