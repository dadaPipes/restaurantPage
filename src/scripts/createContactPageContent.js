import styles from '../styles/createContactPageContent.css'; 

export function createContactPageContent() {

    const contact = document.createElement('div');
    contact.classList.add('contact');
    
    const headLine = document.createElement('h1');
    headLine.classList.add('contact__header');
    headLine.textContent = 'Contact';

    const address = document.createElement('div');
    address.classList.add('address');

    const street = document.createElement('p');
    street.classList.add('address__street');
    street.textContent = 'Nyhavn';

    const number = document.createElement('p');
    number.classList.add('address__number');
    number.textContent = '42';

    const city = document.createElement('p');
    city.classList.add('address__city');
    city.textContent = 'København K';

    const country = document.createElement('p');
    country.classList.add('address__country');
    country.textContent = 'Danmark';
    
    contact.appendChild(headLine);
    contact.appendChild(address);
    address.appendChild(street);
    address.appendChild(number);
    address.appendChild(city);
    address.appendChild(country);

    return contact;
  }