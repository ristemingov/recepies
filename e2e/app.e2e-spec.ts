import { RecepiesPage } from './app.po';

describe('recepies App', function() {
  let page: RecepiesPage;

  beforeEach(() => {
    page = new RecepiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
