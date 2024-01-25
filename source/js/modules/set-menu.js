import {isEscapeKey} from './utils.js';

const menuOpenElement = document.querySelector('[data-open-menu]');
const body = document.querySelector('body');
const menu = document.querySelector('[data-menu]');

const openMenu = () => {
  menu.display = 'block';
  setTimeout(() => {
    menu.classList.add('is-open');
    body.classList.add('scroll-lock');
    menuOpenElement.classList.add('main-header__toggle--active');
  }, 0);
};

const closeMenu = () => {
  menu.display = 'none';
  setTimeout(() => {
    menu.classList.remove('is-open');
    body.classList.remove('scroll-lock');
    menuOpenElement.classList.remove('main-header__toggle--active');
  }, 0);
};

const setMenu = () => {
  if (menuOpenElement) {
    menuOpenElement.addEventListener('click', () => {
      if (!menu.classList.contains('is-open')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  // Добавляем закрытие меню по клавише Esc
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      if (document.querySelector('.main-header__nav.is-open')) {
        closeMenu();
      }
    }
  });

  // Добавляем закрытие меню по клику вне меню
  menu.addEventListener('click', (evt) => {
    if (!evt.target.closest('.main-header__nav')) {
      closeMenu();
    }
  });
};

export {setMenu};
