const hamburger = document.getElementById('hamburger');
const name = document.getElementById('name');
const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const stick = document.getElementById('stick');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
  menu2.classList.toggle('open');
  stick.classList.toggle('open');
  hamburger.classList.toggle('active')
  name.classList.toggle('active');
});
