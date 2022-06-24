import { Locator, Page } from "@playwright/test";
export class SignInPage {
  readonly page: Page;
  readonly createAccountEmailInput: Locator;
  readonly createAccountButton: Locator;
  readonly signInEmailInput: Locator;
  readonly signInPasswordInput: Locator;
  readonly signInButton: Locator;
}
