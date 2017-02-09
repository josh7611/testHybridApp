import { OohaAppPage } from './app.po';

describe('ooha-app App', function() {
  let page: OohaAppPage;

  beforeEach(() => {
    page = new OohaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
