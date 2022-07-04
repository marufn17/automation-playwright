import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../page_objects/pages/homePage";
import { AccountAndListPage } from "../page_objects/pages/accountAndListPage";
import { User } from "../utilities/fixtures/user.fixture";
import { MyAccountPage } from "../page_objects/pages/myAccountPage";
import { SignInPage } from "../page_objects/pages/signInPage";

let homePage: HomePage;
let accountAndListPage: AccountAndListPage;
let signInPage: SignInPage;
test.describe("User login", () => {
  test.beforeEach(async ({ page }) => {
    page.goto("/");
    homePage = new HomePage(page);
    accountAndListPage = new AccountAndListPage(page);
    //implement mouse hover
    await accountAndListPage.accountAndList.hover();
    await accountAndListPage.signInButton.click();
    signInPage = new SignInPage(page);
  });
  //Test case with mouse hover
  test("should not be able to login with invalid email", async ({ page }) => {
    await signInPage.userEnterInvalidEmailToLogin();
    await expect(signInPage.authenticationError).toBeVisible();
  });
});
