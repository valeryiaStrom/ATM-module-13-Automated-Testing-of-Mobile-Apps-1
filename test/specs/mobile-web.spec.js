const chai = require("chai");
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

describe(`A1.by`, () => {
  const expectedPageTitle = 'A1 - провайдер телеком-, ИКТ- и контент-услуг';
  const searchQuery = 'iPhone 11';

  it(`page title should be ${expectedPageTitle}`, async () => {
    await browser.get('https://www.a1.by');
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.equal(`${expectedPageTitle}`);
  });

  it(`should habe 4 menu items`, async () => {
    const touchMenu = element(by.css('#dropdownMenuMain'));
    await touchMenu.click();
    const countOfMenuItems = await element.all(by.css('li.header-main-item')).count();
    expect(countOfMenuItems).to.equal(4);
  });

  it(`should return results for iPhone 11`, async () => {
    const searchIcon = element(by.css('#dropdownGlobalSearch'));
    await searchIcon.click();
    const searchField = element(by.css('#i-global-search-input'));
    await searchField.sendKeys(searchQuery);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform()
    const searchResultsBlock = element(by.css('.product-listing-body'));
    await browser.wait(EC.elementToBeClickable(searchResultsBlock), 10000);
    const countOfSearchResults = await element.all(by.css('.product-listing-box')).count();
    expect(countOfSearchResults).to.be.at.least(1);
  });
});
