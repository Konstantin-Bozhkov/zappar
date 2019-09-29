import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Zappar Random User Generator');
  });

  it('should show card with user', () => {
      let form = element(by.id('generatorForm'));
      // Select the gender
      element(by.cssContainingText('option', 'male')).click();
      // Select option
      element(by.cssContainingText('option', 'AU')).click();
      // Submit the form
      form.submit();
      expect(element(by.css('.card')).isDisplayed());
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
