// import './scss/common.scss';
import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menu from './menu.json';
//console.log(menu)


const murkup = itemsTemplate(menu);
//console.log(murkup)

const menuRef = document.querySelector('.js-menu');
//console.log(menuRef)
menuRef.insertAdjacentHTML("beforeend", murkup);


const refs = {
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function handleCheckboxChange() {
  if (refs.body.className === '') {
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.toggle(Theme.LIGHT);
    refs.body.classList.toggle(Theme.DARK);
  }

  const currentTheme = refs.body.getAttribute('class');

  localStorage.setItem('theme', currentTheme);
}

refs.checkbox.addEventListener('change', handleCheckboxChange);

function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    refs.checkbox.setAttribute('checked', true);
  }
}

restoreTheme();

