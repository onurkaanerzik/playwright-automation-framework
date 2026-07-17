import { test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('Home page opens successfully', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.verifyPageLoaded();
});