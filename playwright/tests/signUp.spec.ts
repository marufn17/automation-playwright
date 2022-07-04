import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../page_objects/pages/homePage";
import { AccountAndListPage } from "../page_objects/pages/accountAndListPage";
import { SignUpPage } from "../page_objects/pages/signUpPage";
let homePage: HomePage;
let accountAndListPage: AccountAndListPage;
let signUpPage: SignUpPage;
test.describe("User sign up", () => {
  test.beforeEach(async ({ page }) => {
    page.goto("/");
    homePage = new HomePage(page);
    accountAndListPage = new AccountAndListPage(page);
    await accountAndListPage.accountAndList.hover();
    await accountAndListPage.createAccountButton.click();
    signUpPage = new SignUpPage(page);
  });

  test("should not be able to sign up with invalid email", async ({ page }) => {
    await signUpPage.userEnterInvalidEmailToSignUp();
    await expect(signUpPage.invalidEmailAlert).toBeVisible();
  });
});
