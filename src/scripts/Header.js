import logoImage from '../images/logo.png';
import '../styles/header.css';
import contentManager from './contentManager.js';

class Header {
  createHeaderContainer() {
    const header = document.createElement('header');
    header.classList.add('header');
    return header;
  }

  createLogo() {
    const logo = document.createElement('img');
    logo.classList.add('header__logo');
    logo.src = logoImage;
    logo.alt = 'restaurant logo. pig dressed like a chef';
    return logo;
  }

  createMainNav() {
    const mainNav = document.createElement('div');
    mainNav.classList.add('main-nav');
    return mainNav;
  }

  createHomeButton() {
    const homeButton = document.createElement('button');
    homeButton.classList.add('main-nav__home');
    homeButton.setAttribute('type', 'button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => contentManager.handleDisplayHome());
    return homeButton;
  }

  createMenuButton() {
    const menuButton = document.createElement('button');
    menuButton.classList.add('main-nav__menu');
    menuButton.setAttribute('type', 'button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => contentManager.handleDisplayMenu());
    return menuButton;
  }
  
  createContactButton() {
    const contactButton = document.createElement('button');
    contactButton.classList.add('main-nav__Contact');
    contactButton.setAttribute('type', 'button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', () => contentManager.handleDisplayContact());
    return contactButton;
  }

  createHeader() {
    const header        = this.createHeaderContainer();
    const logo          = this.createLogo();
    const mainNav       = this.createMainNav();
    const homeButton    = this.createHomeButton();
    const menuButton    = this.createMenuButton();
    const contactButton = this.createContactButton();

    header.appendChild(logo);
    header.appendChild(mainNav);
    mainNav.appendChild(homeButton);
    mainNav.appendChild(menuButton);
    mainNav.appendChild(contactButton);
  
    return header;
  }
}

export default new Header();