import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../page_objects/pages/homePage";

test.describe("Home page", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    homePage = new HomePage(page);
  });
  test("should load successfully @smoke", async ({ page }) => {
    const title = homePage.headerLogo;
    await expect(title).toBeVisible();
  });
});
test.describe("Search", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    homePage = new HomePage(page);
  });
  //test case with dropdown menu
  test("baby category should be selected", async ({ page }) => {
    //select item from dropdown menu using selectOption
    await homePage.searchDropDown.selectOption(homePage.babyOption);
    await homePage.searchBar.fill("bed rail");
    await homePage.searchIcon.click();
    await expect(page.url()).toContain("baby-products");
  });
});
