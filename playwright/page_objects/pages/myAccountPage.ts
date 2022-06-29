import { Locator, Page } from "@playwright/test";
export class MyAccountPage {
  readonly accountTitle: Locator;
  constructor(page: Page) {
    this.accountTitle = page.locator('//h1[text()="My account"]');
  }
}
