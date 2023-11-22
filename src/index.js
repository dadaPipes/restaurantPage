import { createHomePageContent } from './createHomePageContent.js';
import { createMenuPageContent } from './createMenuPageContent.js';
import { createContactPageContent } from './createContactPageContent.js';
import './style.css';

const header = document.createElement('header');
header.classList.add('header');

const tabBar = document.createElement('div');
tabBar.classList.add('tab-bar');

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

header.appendChild(tabBar);

let currentContent = createHomePageContent();

document.body.appendChild(header);
document.body.appendChild(currentContent);