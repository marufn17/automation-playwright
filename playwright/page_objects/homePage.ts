import { Locator, Page } from "@playwright/test";
export class HomePage {
  readonly page: Page;
  readonly headerLogo: Locator;
  readonly searchIcon: Locator;
  readonly searchInput: Locator;
  readonly contactUs: Locator;
  readonly signIn: Locator;
  readonly cart: Locator;
  constructor(page: Page) {
    this.page = page;
    this.headerLogo = page.locator("#header_logo");
    this.searchIcon = page.locator('[name="submit_search"]');
    this.searchInput = page.locator('[id="search_query_top"]');
    this.contactUs = page.locator("");
    this.signIn = page.locator("");
    this.cart = page.locator("");
  }
}
