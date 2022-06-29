import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class AuthenticationPage {
  readonly page: Page;
  readonly createAccountEmailInput: Locator;
  readonly createAccountButton: Locator;
  readonly signInEmailInput: Locator;
  readonly signInPasswordInput: Locator;
  readonly signInButton: Locator;
  readonly createAccountError: Locator;
  readonly authenticationFailedWarning: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createAccountEmailInput = page.locator("#email_create");
    this.createAccountButton = page.locator("#SubmitCreate");
    this.signInEmailInput = page.locator("#email");
    this.signInPasswordInput = page.locator("#passwd");
    this.signInButton = page.locator("#SubmitLogin");
    this.createAccountError = page.locator("#create_account_error");
    this.authenticationFailedWarning = page.locator(
      '//p[text()="There is 1 error"]'
    );
  }
  async userEnterInvalidEmailToSignUp() {
    let name = faker.name.firstName();
    let email = `${name}-${faker.datatype.uuid()}.test.com`;
    await this.createAccountEmailInput.type(email);
    await this.createAccountButton.click();
  }
  async userEnterInvalidEmailToLogin() {
    let name = faker.name.firstName();
    let email = `${name}-${faker.datatype.uuid()}.test.com`;
    await this.signInEmailInput.type(email);
    await this.signInPasswordInput.type("testio");
    await this.signInButton.click();
  }
  async userLogin(data) {
    await this.signInEmailInput.type(data.username);
    await this.signInPasswordInput.type(data.password);
    await this.signInButton.click();
  }
}
