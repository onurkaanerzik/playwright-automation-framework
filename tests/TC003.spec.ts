import { test, expect } from './fixtures/userFixture';

test('TC003 Login Test', async ({ page, user }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username')
    .fill(user.username);

  await page.getByPlaceholder('Password')
    .fill(user.password);

  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);
});