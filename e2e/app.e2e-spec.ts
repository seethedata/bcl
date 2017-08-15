import { BclPage } from './app.po';

describe('bcl App', () => {
  let page: BclPage;

  beforeEach(() => {
    page = new BclPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
