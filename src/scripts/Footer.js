class Footer {

  createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
  
    const content = document.createElement('p');
    content.classList.add('footer__text');
    content.textContent = 'some footer text';
    footer.appendChild(content);
    
    return footer;
  }
}

export default new Footer;