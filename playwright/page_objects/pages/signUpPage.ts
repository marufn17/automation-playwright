import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
export class SignUpPage {
  readonly page: Page;
  readonly firstAndLastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly reEnterPassword: Locator;
  readonly submitButton: Locator;
  readonly invalidEmailAlert: Locator;
  constructor(page: Page) {
    this.page = page;
    this.firstAndLastName = page.locator('[placeholder="First and last name"]');
    this.email = page.locator('input[name="email"]');
    this.password = page.locator('[placeholder="At least 6 characters"]');
    this.reEnterPassword = page.locator('input[name="passwordCheck"]');
    this.submitButton = page.locator('input[type="submit"]');
    this.invalidEmailAlert = page.locator("#auth-email-invalid-claim-alert");
  }
  async userEnterInvalidEmailToSignUp() {
    let userName = faker.name.firstName();
    let email = `${userName}-${faker.datatype.uuid()}.test.com`;
    let password = faker.datatype.string(8);
    await this.firstAndLastName.type(userName + " " + faker.name.lastName());
    await this.email.type(email);
    await this.password.type(password);
    await this.reEnterPassword.type(password);
    await this.submitButton.click();
  }
}
