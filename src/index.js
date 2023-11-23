import { createHomePageContent } from './createHomePageContent.js';
import { createMenuPageContent } from './createMenuPageContent.js';
import { createContactPageContent } from './createContactPageContent.js';
import './style.css';
import logoImage from './images/logo.png';
import fallBackImg from './images/default-image.svg';

// header
const header = document.createElement('header');
header.classList.add('header');

const logo = document.createElement('img');
logo.classList.add('header__logo');
logo.src = logoImage;
logo.alt = 'restaurant logo. pig dressed like a chef';
header.appendChild(logo);

const tabBar = document.createElement('div');
tabBar.classList.add('tab-bar');
header.appendChild(tabBar);

// home
const home = document.createElement('button');
home.classList.add('tab-bar__home');
home.setAttribute('type', 'button');
home.textContent = 'Home';
home.addEventListener('click', () => {
  const newContent = createHomePageContent();
  currentContent.replaceWith(newContent);
  currentContent = newContent;
});
tabBar.appendChild(home);

// menu
const menu = document.createElement('button');
menu.classList.add('tab-bar__menu');
menu.setAttribute('type', 'button');
menu.textContent = 'Menu';
menu.addEventListener('click', () => {
  const newContent = createMenuPageContent();
  currentContent.replaceWith(newContent);
  currentContent = newContent;
});
tabBar.appendChild(menu);

// contact
const contact = document.createElement('button');
contact.classList.add('tab-bar__contact');
contact.setAttribute('type', 'button');
contact.textContent = 'Contact';
contact.addEventListener('click', () => {
  const newContent = createContactPageContent();
  currentContent.replaceWith(newContent);
  currentContent = newContent;
});
tabBar.appendChild(contact);

let currentContent = createHomePageContent();

// footer
const footer = document.createElement('footer');
footer.classList.add('footer');

const content = document.createElement('p');
content.classList.add('footer__context');
content.textContent = 'some footer text';
footer.appendChild(content);

// body
document.body.appendChild(header);
document.body.appendChild(currentContent);
document.body.appendChild(footer);

// fallback for all images
const images = document.querySelectorAll('img');
images.forEach(img => {
 img.onerror = function() {
  img.src = fallBackImg;
 };
});


