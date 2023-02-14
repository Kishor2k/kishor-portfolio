const header = document.querySelector('header');
const menu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navMenu.classList.toggle('active');
});
