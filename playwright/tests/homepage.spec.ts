import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../page_objects/homePage";

test.describe("Home page", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    homePage = new HomePage(page);
  });
  test.skip("should load successfully @smoke", async ({ page }) => {
    const title = homePage.headerLogo;
    await expect(title).toBeVisible();
  });
});
