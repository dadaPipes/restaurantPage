export function createHomePageContent() {
  const image = document.createElement('img');
  image.src = 'https://1.bp.blogspot.com/-6Kj1Wy_DoCA/WQpN7L3Fi-I/AAAAAAABY3E/PudBTtw7d4ol6S_735W32rXnHC6nRmbDQCEw/s1600/2017-04-14%2B21.17.45%2B%25282%2529.jpg';
  image.alt = 'plate with roast pork with parsley sauce, potatoes and pickled beets';
  
  const headLine = document.createElement('h1');
  headLine.textContent = 'Restaurant Hygge Haven';
  
  const description = document.createElement('p');
  description.textContent = 'Welcome to "Hygge Haven," a charming Danish restaurant nestled in the heart of the city. Our restaurant embodies the Danish concept of \'hygge\', offering a warm, cozy atmosphere where you can enjoy simple pleasures and create lasting memories.\n\nAt Hygge Haven, we take pride in serving authentic Danish cuisine crafted with care and the finest locally-sourced ingredients. Our menu is a tribute to Denmark\'s rich culinary heritage, featuring timeless dishes like Smørrebrød, Frikadeller, and Rød Pølse.\n\nOur chefs, trained in the heart of Copenhagen, bring a modern flair to these traditional recipes, creating dishes that are both familiar and enticing. Whether you\'re in the mood for a hearty Danish breakfast, a light lunch, or an indulgent dinner, our menu offers something to satisfy every palate.\n\nYet, Hygge Haven is more than just a restaurant; it\'s a haven where you can unwind, relax, and savor the moment. Our interior, inspired by Danish design principles, showcases warm wood tones, soft lighting, and comfortable seating, creating an ambiance that feels like a home away from home.\n\nSo, come and join us at Hygge Haven, and immerse yourself in the warmth, comfort, and delectable flavors of Denmark right here in the city. We eagerly await the opportunity to welcome you.';
  
  const content = document.getElementById('content');
  content.appendChild(headLine);
  content.appendChild(image);
  content.appendChild(description);
}