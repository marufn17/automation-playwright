import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

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

  async clickOnSignInButton() {
    //this will implement mouse hover action
    await this.accountAndList.hover();
    await this.signInButton.click();
  }

  async clickOnSignUpButton() {
    await this.accountAndList.hover();
    await this.createAccountButton.click();
  }
}
