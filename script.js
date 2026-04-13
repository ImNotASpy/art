document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const menu = document.querySelector('.dropdown-nav');

  if (!button || !menu) {
    return;
  }

  button.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
