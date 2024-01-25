const submenus = document.querySelectorAll('[data-open-submenu]');

const openSubmenu = (submenu) => {
  const submenuList = submenu.querySelector('[data-submenu]');
  submenu.classList.add('is-open');
  setTimeout(() => {
    submenuList.display = 'flex';
  }, 300);
};

const closeSubmenu = (submenu) => {
  const submenuList = submenu.querySelector('[data-submenu]');
  submenu.classList.remove('is-open');
  setTimeout(() => {
    submenuList.display = 'none';
  }, 300);
};

const onSubmenuItemClick = (evt) => {
  const submenuTarget = evt.target.closest('[data-open-submenu]');

  if (submenuTarget.classList.contains('is-open')) {
    closeSubmenu(submenuTarget);
  } else {
    openSubmenu(submenuTarget);
  }
};

const setSubmenu = () => {
  submenus.forEach((item) => {
    item.addEventListener('click', onSubmenuItemClick);
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-open-submenu]')) {
      return;
    }

    const submenuTarget = document.querySelectorAll('[data-open-submenu]');

    submenuTarget.forEach((item) => {
      if (item.classList.contains('is-open')) {
        closeSubmenu(item);
      }
    });
  });
};

export {setSubmenu};
