export function createContactPageContent() {
  const container = document.createElement('div');
  container.classList.add('contact');
 
  const headLine = document.createElement('h1');
  headLine.classList.add('contact__header');
  headLine.textContent = 'Contact';
  container.appendChild(headLine);

  return container;
 }