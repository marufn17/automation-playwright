import { Locator, Page } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly headerLogo: Locator;
  readonly searchDropDown: Locator;
  readonly babyOption: string;
  readonly babyOptionLocator: Locator;
  readonly searchBar: Locator;
  readonly searchIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerLogo = page.locator("#nav-logo-sprites");
    this.searchDropDown = page.locator('select[name="url"]');
    this.babyOption = "search-alias=baby-products";
    this.babyOptionLocator = page.locator('//select//option[text()="Baby"]');
    this.searchBar = page.locator("#twotabsearchtextbox");
    this.searchIcon = page.locator("#nav-search-submit-button");
  }
}
