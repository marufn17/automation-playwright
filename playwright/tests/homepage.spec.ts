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
  //this test case just for reference of using caps letter
  //Also for single action like Shift + A, we can use page.keyboard.press("Shift+A")
  test("user type search item in caps letter", async ({ page }) => {
    await homePage.searchBar.type("SAMSUNG");
  });
  /*
  This test case only for reference of using double click and mouse right click
  */
  test("mouse double click and right click", async ({ page }) => {
    //implement double click
    await homePage.headerLogo.dblclick();
    //implement right click
    await homePage.headerLogo.click({ button: "right" });
  });
});
