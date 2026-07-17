import { test, expect } from '@playwright/test';
import fs from 'fs';

test('TC004 Login Test', async ({ page }) => {

  const username = 'standard_user';
  const password = 'secret_sauce';

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill(username);

  await page.getByPlaceholder('Password').fill(password);

  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);

  // başarılıysa kaydet
  fs.writeFileSync(
    'tests/test-data/runtimeUser.json',
    JSON.stringify({
      username,
      password
    }, null, 2)
  );
});