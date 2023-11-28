import '../styles/ContactContent.css'; 

class ContactContent {

  createContactSection() {
    const contact = document.createElement('section');
    contact.classList.add('contact');
  
    return contact;
  }

  createHeadline() {
    const headLine = document.createElement('h1');
    headLine.classList.add('contact__header');
    headLine.textContent = 'Contact';
  
    return headLine;
  }

  createAddress() {
    const address = document.createElement('div');
    address.classList.add('address');
  
    return address;
  }

  createStreet() {
    const street = document.createElement('p');
    street.classList.add('address__street');
    street.textContent = 'Nyhavn';
  
    return street;
  }

  createStreetNumber() {
    const number = document.createElement('p');
    number.classList.add('address__number');
    number.textContent = '42';
  
    return number;
  }

  createCity() {
    const city = document.createElement('p');
    city.classList.add('address__city');
    city.textContent = 'København K';
  
    return city;
  }

  createCountry() {
    const country = document.createElement('p');
    country.classList.add('address__country');
    country.textContent = 'Danmark';
  
    return country;
  }

  createContactContent() {
    const contact      = this.createContactSection();
    const headLine     = this.createHeadline();
    const address      = this.createAddress();
    const street       = this.createStreet();
    const streetNumber = this.createStreetNumber();
    const city         = this.createCity();
    const country      = this.createCountry();
 
    contact.appendChild(headLine);
    contact.appendChild(address);
    contact.appendChild(street);
    contact.appendChild(streetNumber);
    contact.appendChild(city);
    contact.appendChild(country);
 
    return contact;
 }
}

export default new ContactContent;