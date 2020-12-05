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

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
console.log(bodyRef);
const toolbarRef = document.querySelector('.toolbar');
console.log(toolbarRef)
const theme_switch_toggle_Ref = document.querySelector('#theme-switch-toggle');
console.log(theme_switch_toggle_Ref);



