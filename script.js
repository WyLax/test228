const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const stick = document.getElementById('stick');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
  stick.classList.toggle('open');
  hamburger.classList.toggle('active');
});