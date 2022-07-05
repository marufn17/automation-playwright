import { Locator, Page } from "@playwright/test";
export class NavigationPage {
  readonly page: Page;
  readonly amazonBasic: Locator;
  constructor(page: Page) {
    this.page = page;
    this.amazonBasic = page.locator("");
  }
}
