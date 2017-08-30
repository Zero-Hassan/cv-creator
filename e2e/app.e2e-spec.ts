import { CvCreatorPage } from './app.po';

describe('cv-creator App', () => {
  let page: CvCreatorPage;

  beforeEach(() => {
    page = new CvCreatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
