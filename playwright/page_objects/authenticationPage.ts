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

  constructor(page: Page) {
    this.page = page;
    this.createAccountEmailInput = page.locator("#email_create");
    this.createAccountButton = page.locator("#SubmitCreate");
    this.signInEmailInput = page.locator("");
    this.signInPasswordInput = page.locator("");
    this.signInButton = page.locator("");
    this.createAccountError = page.locator("#create_account_error");
  }
  async userEnterInvalidEmailToSignUp() {
    let name = faker.name.firstName();
    let email = `${name}-${faker.datatype.uuid()}.test.com`;
    console.log(email);
    this.createAccountEmailInput.type(email);
    this.createAccountButton.click();
  }
}
