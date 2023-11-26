import bird from '../images/bird.jpg';
import restaurantFront from '../images/restaurant-front.jpg';
import restaurant1 from '../images/restaurant1.jpg';
import restaurant2 from '../images/restaurant2.jpg';
import restaurant3 from '../images/restaurant3.jpg'; 
import styles from '../styles/createHomePageContent.css';

// hero
function createHeroSection() {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  const image = document.createElement('img');
  image.classList.add('hero__image');
  image.src = restaurantFront;
  image.alt = ''; /* TODO */
  hero.appendChild(image);

  const text = document.createElement('p');
  text.classList.add('hero__text');
  text.innerHTML = 'COZY FOOD <br> WARM VIBES';
  hero.appendChild(text);

  return hero;
}

// introduction
function createIntroductionSection() {
  const introduction = document.createElement('section');
  introduction.classList.add('introduction');

  const content = document.createElement('div');
  content.classList.add('introduction-content');
  introduction.appendChild(content);

  const description = document.createElement('p');
  description.classList.add('introduction__description');
  description.innerHTML = 'Hygge Haven is a charming Danish restaurant nestled in the heart of the city. Our restaurant embodies the Danish concept of \'hygge\', offering a warm, cozy atmosphere where you can enjoy simple pleasures and create lasting memories.<br><br>At Hygge Haven, we take pride in serving authentic Danish cuisine crafted with care and the finest locally-sourced ingredients. Our menu is a tribute to Denmark\'s rich culinary heritage, featuring timeless dishes like Smørrebrød, Frikadeller, and Rød Pølse.<br><br>Our chefs, trained in the heart of Copenhagen, bring a modern flair to these traditional recipes, creating dishes that are both familiar and enticing. Whether you\'re in the mood for a hearty Danish breakfast, a light lunch, or an indulgent dinner, our menu offers something to satisfy every palate.<br><br>Yet, Hygge Haven is more than just a restaurant; it\'s a haven where you can unwind, relax, and savor the moment. Our interior, inspired by Danish design principles, showcases warm wood tones, soft lighting, and comfortable seating, creating an ambiance that feels like a home away from home.<br><br>So, come and join us at Hygge Haven, and immerse yourself in the warmth, comfort, and delectable flavors of Denmark right here in the city. We eagerly await the opportunity to welcome you.';
  content.appendChild(description);

  const image = document.createElement('img');
  image.classList.add('introduction__image');
  image.src = restaurant1;
  image.alt = ''; /* TODO */
  introduction.appendChild(image);

  return introduction;
}

//opening-hours
function createOpeningHoursSection() {
  const openingHours = document.createElement('section');
  openingHours.classList.add('opening-hours');

  const image = document.createElement('img');
  image.classList.add('opening-hours__image');
  image.src = restaurant2;
  image.alt = ''; /* TODO */

  const container = document.createElement('div');
  container.classList.add('opening-hours__content');

  const header = document.createElement('h2');
  header.classList.add('opening-hours__header');
  header.textContent = 'Restaurant Opening Hours';

  const list = document.createElement('ul');
  list.classList.add('opening-hours__list');

  const openingHoursData = {
    Monday: '8:00 AM - 6:00 PM',
    Tuesday: '8:00 AM - 6:00 PM',
    Wednesday: '8:00 AM - 6:00 PM',
    Thursday: '8:00 AM - 8:00 PM',
    Friday: '8:00 AM - 8:00 PM',
    Saturday: '10:00 AM - 4:00 PM',
    Sunday: 'Closed',
  };

  const days = Object.keys(openingHoursData);
  const hours = Object.values(openingHoursData);

  days.forEach((day, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('opening-hours__list-item');
   
    const dayElement = document.createElement('span');
    dayElement.classList.add('opening-hours__day');
    dayElement.textContent = day;
   
    const hoursElement = document.createElement('span');
    hoursElement.classList.add('opening-hours__hours');
    hoursElement.textContent = hours[index];
   
    listItem.appendChild(dayElement);
    listItem.appendChild(hoursElement);
   
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

// location
function createLocationSection() {
  const location = document.createElement('section');
  location.classList.add('location');

  const container = document.createElement('div');
  container.classList.add('location__container');
  location.appendChild(container);

  const header = document.createElement('h2');
  header.classList = 'location__header';
  header.textContent = 'Location';
  container.appendChild(header);

  const address = document.createElement('p');
  address.classList.add('location__address');
  address.innerHTML = 'Nyhavn 42 <br> 1202 <br> København K <br> Denmark';
  container.appendChild(address);

  const image = document.createElement('img');
  image.classList.add('location__image');
  image.src = restaurant3;
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

  const openingHours = createOpeningHoursSection();
  home.appendChild(openingHours);

  const location = createLocationSection();
  home.appendChild(location);

  return home;
}
