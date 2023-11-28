import '../styles/MenuContent.css';
import MenuManager from './menuManager';

class MenuContent {
  
  createMenuSection() {
    const menu = document.createElement('section');
    menu.classList.add('menu');
    return menu;
  }

  createMenuContainer() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu__content');
    return menuContent;
  }

  createMenuHeader(menuHeader) {
    const header = document.createElement('h1');
    header.classList.add('menu__header');
    header.textContent = menuHeader;
    return header;
  }

  createMenuList(items) {
    const list = document.createElement('ul');
    list.classList.add('list');
  
    items.forEach(itemData => {
      const item = document.createElement('li');
      item.classList.add('card');
  
      const image = document.createElement('img');
      image.classList.add('card__image');
      image.src = itemData.image;
      const content = document.createElement('div');
      content.classList.add('card__content');
      
      const name = document.createElement('h2');
      name.classList.add('card__name');
      name.textContent = itemData.name;
  
      const description = document.createElement('p');
      description.classList.add('card__description');
      description.textContent = itemData.description;
      const price = document.createElement('p');
      price.classList.add('card__price');
      price.textContent = itemData.price;
  
      item.appendChild(image);
      item.appendChild(content);
      content.appendChild(name);
      content.appendChild(description);
      content.appendChild(price);
      list.appendChild(item);
    });
  
    return list;
  }

  createMenuContent() {
    const menuSection       = this.createMenuSection();
    const menuContent       = this.createMenuContainer();
    
    const starterMenuHeader = this.createMenuHeader('Starters');
    const starterMenu       = this.createMenuList(MenuManager.createStarterMenuItems());
    menuContent.appendChild(starterMenuHeader);
    menuContent.appendChild(starterMenu);
    
    const mainMenuHeader    = this.createMenuHeader('Main');
    const mainMenu          = this.createMenuList(MenuManager.createMainMenuItems());
    menuContent.appendChild(mainMenuHeader);
    menuContent.appendChild(mainMenu);
    
    const dessertMenuHeader = this.createMenuHeader('Desserts');
    const dessertMenu       = this.createMenuList(MenuManager.createDessertMenuItems());
    menuContent.appendChild(dessertMenuHeader);
    menuContent.appendChild(dessertMenu);
    
    menuSection.appendChild(menuContent);
    
    return menuSection;
  }
}

export default new MenuContent();