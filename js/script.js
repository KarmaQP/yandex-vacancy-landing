'use strict';

// Participants desktop slider
function participantsDesktopSlider() {
  const slides = document.querySelectorAll('.slider__slide');
  const btnLeft = document.querySelector('.control__arrow-btn--left');
  const btnRight = document.querySelector('.control__arrow-btn--right');
  const currentSlideEl = document.querySelector('.control__counter-current');
  const maxSlideEl = document.querySelector('.control__counter-max');

  let curSlide = 0;
  const maxSlide = slides.length;

  maxSlideEl.innerHTML = `${maxSlide}`;

  // Functions
  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${120 * (i - slide)}%)`)
    );
  }

  function nextSlide() {
    if (curSlide === maxSlide - 1) {
      return;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    currentSlideEl.innerHTML = `${curSlide + 1}`;
    btnLeft.disabled = false;
    btnRight.disabled = true;
  }

  function prevSlide() {
    if (curSlide === 0) {
      return;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    currentSlideEl.innerHTML = `${curSlide + 1}`;
    btnLeft.disabled = true;
    btnRight.disabled = false;
  }

  function init() {
    goToSlide(0);
  }
  init();

  // Event handlers
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  // Interval every 4 seconds
  setInterval(() => {
    curSlide++;

    if (curSlide + 1 > maxSlide) {
      curSlide = 0;
      goToSlide(curSlide);
      btnRight.disabled = false;
      btnLeft.disabled = false;
    } else {
      goToSlide(curSlide);
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }

    if (curSlide === 0) btnLeft.disabled = true;
    else if (curSlide + 1 === maxSlide) btnRight.disabled = true;

    currentSlideEl.innerHTML = `${curSlide + 1}`;
  }, 4000);
}
participantsDesktopSlider();

// Participants mobile slider
function participantsMobileSlider() {
  const slides = document.querySelectorAll('.slider__slide--m');
  const btnLeft = document.querySelector('.control__arrow-btn-m--left');
  const btnRight = document.querySelector('.control__arrow-btn-m--right');
  const currentSlideEl = document.querySelector('.control__counter-current--m');
  const maxSlideEl = document.querySelector('.control__counter-max--m');

  let curSlide = 0;
  const maxSlide = slides.length;

  maxSlideEl.innerHTML = `${maxSlide}`;

  // Functions
  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${120 * (i - slide)}%)`)
    );
  }

  function nextSlide() {
    if (curSlide === maxSlide - 1) {
      return;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    currentSlideEl.innerHTML = `${curSlide + 1}`;
    if (curSlide + 1 === maxSlide) {
      btnRight.disabled = true;
      btnLeft.disabled = false;
    } else {
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }
  }

  function prevSlide() {
    if (curSlide === 0) {
      return;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    currentSlideEl.innerHTML = `${curSlide + 1}`;
    if (curSlide === 0) {
      btnRight.disabled = false;
      btnLeft.disabled = true;
    } else {
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }
  }

  function init() {
    goToSlide(0);
  }
  init();

  // Event handlers
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  // Interval every 4 seconds
  setInterval(() => {
    curSlide++;

    if (curSlide + 1 > maxSlide) {
      curSlide = 0;
      goToSlide(curSlide);
      btnRight.disabled = false;
      btnLeft.disabled = false;
    } else {
      goToSlide(curSlide);
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }

    if (curSlide === 0) btnLeft.disabled = true;
    else if (curSlide + 1 === maxSlide) btnRight.disabled = true;

    currentSlideEl.innerHTML = `${curSlide + 1}`;
  }, 4000);
}
participantsMobileSlider();

// Stages mobile slider
function stagesMobileSlider() {
  const slides = document.querySelectorAll('.stages-slider__slide');
  const btnLeft = document.querySelector('.control__stage-arrow-btn--left');
  const btnRight = document.querySelector('.control__stage-arrow-btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  function createDots() {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  function activateDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  }

  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${120 * (i - slide)}%)`)
    );
  }

  function nextSlide() {
    if (curSlide === maxSlide - 1) {
      return;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);

    if (curSlide + 1 === maxSlide) {
      btnRight.disabled = true;
      btnLeft.disabled = false;
    } else {
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }
  }

  function prevSlide() {
    if (curSlide === 0) {
      return;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);

    if (curSlide === 0) {
      btnRight.disabled = false;
      btnLeft.disabled = true;
    } else {
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }
  }

  function init() {
    createDots();
    goToSlide(0);
    activateDot(0);
  }
  init();

  // Event handlers
  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = e.target.dataset.slide;
      goToSlide(curSlide);
      activateDot(curSlide);
    }

    // if last -> disable right button
    if (Number(curSlide) + 1 === maxSlide) {
      btnRight.disabled = true;
      btnLeft.disabled = false;

      // if first -> disable left button
    } else if (Number(curSlide) === 0) {
      btnRight.disabled = false;
      btnLeft.disabled = true;

      // else no disable
    } else {
      btnRight.disabled = false;
      btnLeft.disabled = false;
    }
  });
}
stagesMobileSlider();

function initAnchors() {
  document.querySelector('.hero__btns').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
}
initAnchors();
