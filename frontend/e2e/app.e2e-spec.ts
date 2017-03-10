import { AcaisoftTargiPage } from './app.po';

describe('acaisoft-targi App', () => {
  let page: AcaisoftTargiPage;

  beforeEach(() => {
    page = new AcaisoftTargiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
