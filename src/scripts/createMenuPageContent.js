import styles from '../styles/createMenuPageContent.css';

export function createMenuPageContent() {

  function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    return menu;
  }

  function createHeader() {
    const header = document.createElement('h1');
    header.classList.add('menu__header');
    header.textContent = 'Our Menu';

    return header;
  }

  function createMenuContent() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu__content');

    return menuContent;
  }

  function createStarterMenu() {
    const list = document.createElement('ul');
    list.classList.add('list');

    const items = [
      { image: 'https://i.pinimg.com/564x/35/dd/a6/35dda6558f8decf4cb97a16923894aa9.jpg', 
      name: 'Gravad Laks med Sennepssovs', 
      description: 'Delicate slices of cured salmon served with a tangy mustard sauce, offering a perfect balance of richness and zesty flavors.' },

      { image: 'https://spisbedre-production-app.imgix.net/images/recipes/kold-aertesuppe-med-koriander-og-nigella_14431.jpg?auto=format&ar=655%3A500&fit=crop&crop=focalpoint&fp-x=0.5007937549199685&fp-y=0.7476760138730942&fp-z=1.5006595656710835&w=689', 
      name: 'Kold Ærtesuppe med Mynte', 
      description: 'A chilled pea soup infused with mint, providing a light and vibrant start to your dining experience.' },

      { image: 'https://cdn.squaremeal.co.uk/article/9868/images/best-brunch-essex-aurum_21012021032355.jpg?w=1000', 
      name: 'Kartoffelmad med Laks og Purløg', 
      description: 'Thinly sliced potatoes topped with smoked salmon and fresh chives, creating a light and flavorful bite.' },

      { image: 'https://mad.winther.nu/image/300x400/53a9a8be-48bf-488c-b3c8-4dca1eecf5d8.jpg', 
      name: 'Rejecocktail med Avocado', 
      description: 'Succulent shrimp cocktail served with creamy avocado, offering a combination of seafood freshness and creamy richness.' },

      { image: 'https://i.pinimg.com/564x/2a/1a/88/2a1a88a61c801eb2a367ce00cec53ec1.jpg', 
      name: 'Røget Andebryst med Hvidløgsfløde', 
      description: 'Smoked duck breast slices served with a velvety garlic cream sauce, providing a rich and savory start to your meal.' },
    ];

    items.forEach(itemData => {
      const item = document.createElement('li');
      item.classList.add('card');
  
      const image = document.createElement('img');
      image.classList.add('card__image');
      image.src = itemData.image;
      
      const name = document.createElement('h2');
      name.classList.add('card__name');
      name.textContent = itemData.name;
  
      const description = document.createElement('p');
      description.classList.add('card__description');
      description.textContent = itemData.description;
  
      item.appendChild(image);
      item.appendChild(name);
      item.appendChild(description);
      list.appendChild(item);
    });

    return list;
  }

  function createMainMenuList() {
    const list = document.createElement('ul');
    list.classList.add('list');
    
    const items = [
      { image: 'https://madensverden.dk/wp-content/uploads/2017/08/floedekartofler-opskrift-med-porrer-og-hvidloeg.jpg', 
      name: 'Oksesteg Med Flødekartofler', 
      description: 'Slow-cooked beef roast served with creamy scalloped potatoes. The tender beef paired with the velvety potatoes creates a harmonious and decadent dining experience.' },
  
      { image: 'https://3.bp.blogspot.com/-gIl40-SLraQ/WQpN6SZyUfI/AAAAAAABY3E/hIjJ4pSLLb4HjJtKxriV6Zir3q_ntsHLwCEw/s1600/2017-04-14%2B21.07.56.jpg',
       name: 'Stegt Flæsk Med Persillesovs', 
       description: 'Crispy slices of pork belly served with a rich parsley sauce and creamy potatoes. A comforting and hearty dish that embodies the essence of Danish home cooking.' },
  
      { image: 'http://www.sakana.dk/wp-content/uploads/IMG_1978.jpg', 
      name: 'Rødspættefilet Med Remoulade', 
      description: 'Pan-fried plaice fillets served with a zesty remoulade sauce, lemon wedges, and a side of buttered potatoes. A light and flavorful seafood option.' },
  
      { image: 'https://i.pinimg.com/564x/e4/9c/36/e49c3655dce7ed9f2a12706505fef0d6.jpg', 
      name: 'Krebinetter Med Kartofler og Sovs', 
      description: 'Breaded and fried pork patties served with creamy potatoes and a luscious gravy. A dish that combines crispy textures with savory goodness.' },
  
      { image: 'https://www.simplyscratch.com/wp-content/uploads/2020/10/Leftover-Prime-Rib-Hash-l-SimplyScratch.com-primerib-leftovers-breakfast-hash-brunch-holiday-recipe-15-700x1049.jpg', 
      name: 'Biksemad', 
      description: 'A medley of diced meats (often leftover roast beef or pork), potatoes, and onions pan-fried until crispy. Served with a fried egg on top for a satisfying and straightforward meal.' },
  
      { image: 'http://1.bp.blogspot.com/-azuBm-0he-4/VZt8CBOi9pI/AAAAAAABRwA/yYU0u4vANdw/s1600/2014-06-08%2B20.05.36.jpg', 
      name: 'Kold Kartoffelsalat Med Rygeost', 
      description: 'Cold potato salad mixed with smoked cheese, herbs, and a light dressing. A unique and flavorful side dish that complements a variety of main courses.' },
  
      { image: 'https://sandwichpigen.dk/wp-content/uploads/2018/12/frikadellerkartoffelsalat-470x705.jpg', 
      name: 'Frikadeller Med Kartoffelsalat', 
      description: 'Danish meatballs made from a blend of pork and beef, accompanied by a tangy potato salad. A delightful combination of flavors and textures.' },
  
      { image: 'https://2.bp.blogspot.com/-DeOtCOiu0Pg/T6lvLQhbFPI/AAAAAAAABm4/HNWpMDO1aNY/s640/IMG_0475.JPG', 
      name: 'Lammekoteletter Med Rodfrugter', 
      description: 'Grilled lamb chops served with roasted root vegetables and a flavorful herb-infused sauce. A dish that harmonizes the robustness of lamb with the sweetness of roasted vegetables.' },
  
      { image: 'https://www.havnebistroen.dk/wp-content/uploads/2015/09/Stjerneskud-300x225.jpg', 
      name: 'Stjerneskud', 
      description: 'A Danish open-faced sandwich. A base of buttered toast topped with fried and steamed fish fillets, shrimp, and a creamy dressing. A seafood lover\'s delight.' },
    ];
  
    items.forEach(itemData => {
      const item = document.createElement('li');
      item.classList.add('card');
  
      const image = document.createElement('img');
      image.classList.add('card__image');
      image.src = itemData.image;
      
      const name = document.createElement('h2');
      name.classList.add('card__name');
      name.textContent = itemData.name;
  
      const description = document.createElement('p');
      description.classList.add('card__description');
      description.textContent = itemData.description;
  
      item.appendChild(image);
      item.appendChild(name);
      item.appendChild(description);
      list.appendChild(item);
    });

    return list;
  }

  function createDessertMenu() {
    const list = document.createElement('ul');
    list.classList.add('list');

    const items = [
      { image: 'https://mad.winther.nu/image/300x400/4fb97e6e-4125-4654-b0fe-22de67d7b352.jpg', 
      name: 'Klassisk Æblekage med Kanel og Makroner', 
      description: 'Layers of spiced apples, cinnamon, and delicate macaroon crumbles create a comforting and indulgent dessert experience.' },

      { image: 'https://i.pinimg.com/564x/c8/86/c8/c886c833a7e9d892aae7fc074a751658.jpg', 
      name: 'Citronfromage med Knasende Marengs', 
      description: 'Luscious lemon fromage topped with crisp and chewy meringue, creating a zesty and textural symphony.' },

      { image: 'https://cdn-free-legacy.tv2i.dk/2015/11/29/Mad1.jpg?crop=faces&w=624&h=351&fit=crop&auto=format', 
      name: 'Risalamande med Kirsebærsauce', 
      description: 'Creamy rice pudding adorned with chopped almonds, and a luscious cherry sauce, bringing warmth and nostalgia to your dessert selection.' },

      { image: 'https://sundmad.net/wp-content/uploads/2015/05/Vaniljeis-med-rabarber.jpg', 
      name: 'Rabarberkompot med Vaniljeis', 
      description: 'Tangy rhubarb compote paired with velvety vanilla ice cream, offering a refreshing and comforting dessert experience.' },

      { image: 'https://i.pinimg.com/564x/c9/12/46/c91246b435cb4cae9a8fedb4b1be97bf.jpg', 
      name: 'Hindbærsnitter med Vaniljecreme', 
      description: 'Raspberry-filled pastry slices with a luscious vanilla cream, creating a delightful combination of textures and flavors.' },
    
      { image: 'https://spisbedre-production-app.imgix.net/images/recipes/karamelliserede-aebler-med-crumble_6692.jpg?auto=format&ar=655%3A500&fit=crop&crop=focalpoint&fp-x=0.6729128189774247&fp-y=0.7506375688375885&fp-z=2.4294626399463186&w=689', 
      name: 'Karamelliserede Æbler med Flødeskum', 
      description: 'Caramelized apples topped with a dollop of whipped cream, offering a simple yet satisfying dessert option.' },
    ];

    items.forEach(itemData => {
      const item = document.createElement('li');
      item.classList.add('card');
  
      const image = document.createElement('img');
      image.classList.add('card__image');
      image.src = itemData.image;
      
      const name = document.createElement('h2');
      name.classList.add('card__name');
      name.textContent = itemData.name;
  
      const description = document.createElement('p');
      description.classList.add('card__description');
      description.textContent = itemData.description;
  
      item.appendChild(image);
      item.appendChild(name);
      item.appendChild(description);
      list.appendChild(item);
    });

    return list;
  }

  const menu          = createMenu();
  const header        = createHeader();
  const menuContent   = createMenuContent();
  const starterMenu   = createStarterMenu();
  const mainMenuList  = createMainMenuList();
  const dessertMenu   = createDessertMenu();
  

  menu.appendChild(header);
  menu.appendChild(menuContent);
  menuContent.appendChild(starterMenu);
  menuContent.appendChild(mainMenuList);
  menuContent.appendChild(dessertMenu);
  
  return menu;
}