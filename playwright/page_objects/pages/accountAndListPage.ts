import { Locator, Page } from "@playwright/test";

export class AccountAndListPage {
  readonly page: Page;
  readonly accountAndList: Locator;
  readonly signInButton: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountAndList = page.locator("#nav-link-accountList");
    this.signInButton = page.locator("#nav-flyout-ya-signin >> text=Sign in");
    this.createAccountButton = page.locator(
      "#nav-flyout-ya-newCust >> text=Start here."
    );
  }
}
