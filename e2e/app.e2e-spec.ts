import { AviabirdWebsitePage } from './app.po';

describe('aviabird-website App', () => {
  let page: AviabirdWebsitePage;

  beforeEach(() => {
    page = new AviabirdWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aw works!');
  });
});
