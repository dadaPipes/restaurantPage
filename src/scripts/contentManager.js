import HomeContent from './HomeContent.js';
import MenuContent from './MenuContent.js';
import ContactContent from './ContactContent.js';

class ContentManager {
  constructor() {
    this.currentContent = HomeContent.createHomeContent();
  }

  getCurrentContent() {
    return this.currentContent;
  }

  updateContent(newContent) {
    this.currentContent.replaceWith(newContent);
    this.currentContent = newContent;
  }

  handleDisplayHome() {
    this.updateContent(HomeContent.createHomeContent());
  }

  handleDisplayMenu() {
    this.updateContent(MenuContent.createMenuContent());
  }

  handleDisplayContact() {
    this.updateContent(ContactContent.createContactContent());
  }
}

export default new ContentManager();
