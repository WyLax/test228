const button_menu = document.getElementById('button_menu');
const name = document.getElementById('name');
const menu_bg = document.getElementById('menu_bg');
const menu_text = document.getElementById('menu_text');
const line = document.getElementById('line');

button_menu.addEventListener('click', () => {
  menu_bg.classList.toggle('open');
  menu_text.classList.toggle('open');
  line.classList.toggle('open');
  button_menu.classList.toggle('active')
  name.classList.toggle('active');
});
