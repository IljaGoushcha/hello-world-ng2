import { HelloWorldNg2Page } from './app.po';

describe('hello-world-ng2 App', function() {
  let page: HelloWorldNg2Page;

  beforeEach(() => {
    page = new HelloWorldNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
