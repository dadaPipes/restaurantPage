import { createHomePageContent }    from './scripts/createHomePageContent.js';
import { createMenuPageContent }    from './scripts/createMenuPageContent.js';
import { createContactPageContent } from './scripts/createContactPageContent.js';
import { createPageFooterContent }  from './scripts/createFooterPageContent.js';
import './styles/index.css';
import logoImage from './images/logo.png';
import fallBackImg from './images/default-image.svg';

// header
const header = document.createElement('header');
header.classList.add('header');

// logo
const logo = document.createElement('img');
logo.classList.add('header__logo');
logo.src = logoImage;
logo.alt = 'restaurant logo. pig dressed like a chef';

// tab-bar
const tabBar = document.createElement('div');
tabBar.classList.add('tab-bar');

// header-home-button
const home = document.createElement('button');
home.classList.add('tab-bar__home');
home.setAttribute('type', 'button');
home.textContent = 'Home';
home.addEventListener('click', () => {
  const newContent = createHomePageContent();
  currentContent.replaceWith(newContent);
  currentContent = newContent;
});

// header-menu-button
const menu = document.createElement('button');
menu.classList.add('tab-bar__menu');
menu.setAttribute('type', 'button');
menu.textContent = 'Menu';
menu.addEventListener('click', () => {
  const newContent = createMenuPageContent();
  currentContent.replaceWith(newContent);
  currentContent = newContent;
});

// header-contact-button
const contact = document.createElement('button');
contact.classList.add('tab-bar__contact');
contact.setAttribute('type', 'button');
contact.textContent = 'Contact';
contact.addEventListener('click', () => {
  const newContent = createContactPageContent();
  currentContent.replaceWith(newContent);
  currentContent = newContent;
});

// footer
const footer = createPageFooterContent();
footer.style.textAlign = 'center';

header.appendChild(logo);
header.appendChild(tabBar);
tabBar.appendChild(home);
tabBar.appendChild(menu);
tabBar.appendChild(contact);

let currentContent = createHomePageContent();

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