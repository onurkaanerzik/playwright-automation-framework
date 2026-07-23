import { test } from '../../src/fixtures';

test.describe('Home page', { tag: ['@ui', '@smoke', '@regression'] }, () => {
  test('should load successfully', async ({ homePage }) => {
    await homePage.open();

    await homePage.verifyPageLoaded();
  });

  test('should logout successfully', async ({ homePage, loginPage, inventoryPage }) => {
    await inventoryPage.open();

    await inventoryPage.verifyPageLoaded();

    await homePage.navigationBar.logout();

    await loginPage.verifyPageLoaded();
  });
});
