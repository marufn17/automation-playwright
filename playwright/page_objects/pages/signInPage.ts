import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
export class SignInPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly authenticationError: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("#ap_email");
    this.submitButton = page.locator('input[type="submit"]');
    this.authenticationError = page.locator("#auth-error-message-box");
  }
  async userEnterInvalidEmailToLogin() {
    let name = faker.name.firstName();
    let email = `${name}-${faker.datatype.uuid()}.test.com`;
    await this.emailInput.type(email);
    await this.submitButton.click();
  }
}
