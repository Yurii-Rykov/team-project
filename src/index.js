// -> slider
var swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  //     autoplay: {
  //       delay: 3000,
  //       stopOnLastSlide: false,
  //       disableOnInteraction: false
  // },
  mousewheel: true,
  keyboard: true,
});

// -end-slider

// -------- Mobile menu ---------

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuLink1 = document.querySelector('[data-link1]');
  const menuLink2 = document.querySelector('[data-link2]');
  const menuLink3 = document.querySelector('[data-link3]');
  const menuLink4 = document.querySelector('[data-link4]');
  const refs = { body: document.querySelector('body') };

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');

    refs.body.classList.toggle('no-scroll');
  });

  menuLink1.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  });

  menuLink2.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  });

  menuLink3.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  });

  menuLink4.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  });
})();

// ----------- Modal window -----------

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

//----------- To up button ---------

function up() {
  var top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    t = setTimeout('up()', 20);
  } else clearTimeout(t);
  return false;
}

// ----------- Modal window header -----------

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-header]'),
    openModalBtnMob: document.querySelector('[data-modal-open-header-mob]'),
    closeModalBtn: document.querySelector('[data-modal-close-header]'),
    closeModalBtnMob: document.querySelector('[data-modal-close-header-mob]'),
    modal: document.querySelector('[data-modal-header]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMob.addEventListener('click', toggleModalMob);
  refs.closeModalBtnMob.addEventListener('click', toggleModalMob);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleModalMob() {
    refs.modal.classList.toggle('is-hidden');
    // refs.body.classList.toggle('no-scroll');
  }
})();
