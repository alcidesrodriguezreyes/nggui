import { NgguiPage } from './app.po';

describe('nggui App', () => {
  let page: NgguiPage;

  beforeEach(() => {
    page = new NgguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gui works!');
  });
});
