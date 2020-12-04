// import './scss/common.scss';
import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import menu from './menu.json'
//console.log(menu)


const murkup = itemsTemplate(menu);
console.log(murkup)

const menuRef = document.querySelector('.js-menu');
console.log(menuRef)
// menuRef.insertAdjacentElement("beforeend", murkup);