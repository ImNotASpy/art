<<<<<<< HEAD
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
=======
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
>>>>>>> 604bd991f92130e2cc04731fbd8719eb1f1102e7
