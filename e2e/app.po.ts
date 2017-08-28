import { browser, by, element } from 'protractor';

export class AviabirdWebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aw-root h1')).getText();
  }
}
