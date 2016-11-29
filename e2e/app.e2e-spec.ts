import { YuriPicPage } from './app.po';

describe('yuri-pic App', function() {
  let page: YuriPicPage;

  beforeEach(() => {
    page = new YuriPicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
