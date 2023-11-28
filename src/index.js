import './styles/index.css';
import Header from './scripts/Header.js';
import ContentManager from './scripts/contentManager.js';
import Footer from './scripts/Footer.js';
import fallBackImg from './images/default-image.svg';

const header = Header.createHeader();
let currentContent = ContentManager.getCurrentContent();
const footer = Footer.createFooter();

document.body.appendChild(header);
document.body.appendChild(currentContent);
document.body.appendChild(footer);

// Where the fuck do I place this ??
// fallback for all images
const images = document.querySelectorAll('img');
images.forEach(img => {
 img.onerror = function() {
  img.src = fallBackImg;
 };
});