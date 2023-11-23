import bird from './images/bird.jpg';

function createHeroSection() {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  const image = document.createElement('img');
  image.classList.add('hero__image');
  image.src = bird;
  image.alt = ''; /* TODO */
  hero.appendChild(image);

  const text = document.createElement('p');
  text.classList.add('hero__text');
  text.innerHTML = 'COZY FOOD <br> COOL VIBES';
  hero.appendChild(text);

  return hero;
}

function createIntroductionSection() {
  const introduction = document.createElement('section');
  introduction.classList.add('introduction');

  const content = document.createElement('div');
  content.classList.add('introduction-content');
  introduction.appendChild(content);

  const headLine = document.createElement('h3');
  headLine.classList.add('introduction__headLine');
  headLine.textContent = 'Restaurant Hygge Haven';
  content.appendChild(headLine);

  const description = document.createElement('p');
  description.classList.add('introduction__description');
  description.textContent = 'Welcome to "Hygge Haven," a charming Danish restaurant nestled in the heart of the city. Our restaurant embodies the Danish concept of \'hygge\', offering a warm, cozy atmosphere where you can enjoy simple pleasures and create lasting memories.\n\nAt Hygge Haven, we take pride in serving authentic Danish cuisine crafted with care and the finest locally-sourced ingredients. Our menu is a tribute to Denmark\'s rich culinary heritage, featuring timeless dishes like Smørrebrød, Frikadeller, and Rød Pølse.\n\nOur chefs, trained in the heart of Copenhagen, bring a modern flair to these traditional recipes, creating dishes that are both familiar and enticing. Whether you\'re in the mood for a hearty Danish breakfast, a light lunch, or an indulgent dinner, our menu offers something to satisfy every palate.\n\nYet, Hygge Haven is more than just a restaurant; it\'s a haven where you can unwind, relax, and savor the moment. Our interior, inspired by Danish design principles, showcases warm wood tones, soft lighting, and comfortable seating, creating an ambiance that feels like a home away from home.\n\nSo, come and join us at Hygge Haven, and immerse yourself in the warmth, comfort, and delectable flavors of Denmark right here in the city. We eagerly await the opportunity to welcome you.';
  content.appendChild(description);

  const image = document.createElement('img');
  image.classList.add('introduction__image');
  image.src = bird;
  image.alt = ''; /* TODO */
  introduction.appendChild(image);

  return introduction;
}

function createOpeningHoursSection() {
  const openingHours = document.createElement('section');
  openingHours.classList.add('opening-hours');

  const image = document.createElement('img');
  image.classList.add('opening-hours__image');
  image.src = bird;
  image.alt = ''; /* TODO */

  const openingHoursData = {
    Monday: '8:00 AM - 6:00 PM',
    Tuesday: '8:00 AM - 6:00 PM',
    Wednesday: '8:00 AM - 6:00 PM',
    Thursday: '8:00 AM - 8:00 PM',
    Friday: '8:00 AM - 8:00 PM',
    Saturday: '10:00 AM - 4:00 PM',
    Sunday: 'Closed',
  };

  const container = document.createElement('div');
  container.classList.add('opening-hours__container');

  const header = document.createElement('h2');
  header.classList.add('opening-hours__header');
  header.textContent = 'Restaurant Opening Hours';

  const list = document.createElement('ul');
  list.classList.add('opening-hours__list');

  Object.entries(openingHoursData).forEach(([day, hours]) => {
    const listItem = document.createElement('li');
    listItem.classList.add('opening-hours__list-item');
    listItem.textContent = `${day}: ${hours}`;
    list.appendChild(listItem);
  });

  const footer = document.createElement('p');
  footer.classList.add('opening-hours__footer');
  footer.textContent = 'Food is served';

  container.appendChild(header);
  container.appendChild(list);
  container.appendChild(footer);
  openingHours.appendChild(image);
  openingHours.appendChild(container);

  return openingHours;
}

function createLocationSection() {
  const location = document.createElement('section');
  location.classList.add('location');

  const address = document.createElement('p');
  address.classList.add('location__address');
  address.innerHTML = 'Nygade 42 <br> 1202 <br> København K <br> Denmark';
  location.appendChild(address);

  const image = document.createElement('img');
  image.classList.add('location__image');
  image.src = bird;
  image.alt = ''; /* TODO */
  location.appendChild(image);

  return location;
}

export function createHomePageContent() {
  const home = document.createElement('div');
  home.classList.add('home');

  const hero = createHeroSection();
  home.appendChild(hero);

  const introduction = createIntroductionSection();
  home.appendChild(introduction);

  const hours = createOpeningHoursSection();
  home.appendChild(hours);

  const location = createLocationSection();
  home.appendChild(location);

  return home;
}
