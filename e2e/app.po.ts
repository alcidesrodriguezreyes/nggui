import { browser, element, by } from 'protractor';

export class NgguiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gui-root h1')).getText();
  }
}
