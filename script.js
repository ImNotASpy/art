document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const menu = document.querySelector('.dropdown-nav');

  if (!button || !menu) {
    console.log('Menu elements not found');
    return;
  }

  button.addEventListener('click', () => {
    menu.classList.toggle('open');
    console.log('Menu toggled');
  });
});
