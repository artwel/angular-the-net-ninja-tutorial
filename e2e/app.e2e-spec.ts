import { TheNetNinjaTutorialPage } from './app.po';

describe('the-net-ninja-tutorial App', () => {
  let page: TheNetNinjaTutorialPage;

  beforeEach(() => {
    page = new TheNetNinjaTutorialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
