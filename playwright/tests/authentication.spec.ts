import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../page_objects/pages/homePage";
import { AuthenticationPage } from "../page_objects/pages/authenticationPage";
import { User } from "../utilities/fixtures/user.fixture";
import { MyAccountPage } from "../page_objects/pages/myAccountPage";

let homePage: HomePage;
let authenticationPage: AuthenticationPage;
test.describe("User sign up", () => {
  test.beforeEach(async ({ page }) => {
    page.goto("/");
    homePage = new HomePage(page);
    authenticationPage = new AuthenticationPage(page);
  });

  test("should not be able to sign up with invalid email", async ({ page }) => {
    await homePage.signIn.click();
    await authenticationPage.userEnterInvalidEmailToSignUp();
    await expect(authenticationPage.createAccountError).toBeVisible();
  });
});
test.describe("User Login", () => {
  test.beforeEach(async ({ page }) => {
    page.goto("/");
    homePage = new HomePage(page);
    authenticationPage = new AuthenticationPage(page);
  });
  test("should not be able to login with invalid email", async ({ page }) => {
    await homePage.signIn.click();
    await authenticationPage.userEnterInvalidEmailToLogin();
    await expect(authenticationPage.authenticationFailedWarning).toBeVisible();
  });
  test.only("should be able to login", async ({ page }) => {
    await homePage.signIn.click();
    const credential = new User();
    const myAccountPage = new MyAccountPage(page);
    await authenticationPage.userLogin(credential);
    await expect(myAccountPage.accountTitle).toBeVisible();
  });
});
