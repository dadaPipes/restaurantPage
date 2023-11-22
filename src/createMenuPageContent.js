export function createMenuPageContent() {
  const container = document.createElement('div');
  container.classList.add('menu');
 
  const headLine = document.createElement('h1');
  headLine.classList.add('menu__header');
  headLine.textContent = 'Menu';
  container.appendChild(headLine);
  
  return container;
 }