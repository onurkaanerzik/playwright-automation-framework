import { test, expect } from '@playwright/test';
import users from './test-data/user.json';

for (const user of users) {

  test(`TC001- ${user.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

    // Expect a title "to contain" a substring.
    await page.getByPlaceholder('Username').fill (user.username);
    await page.getByPlaceholder('Password').fill (user.password);
    await page.getByRole('button', {name: 'Login'}).click();
    //await page.locator('#login-button').click();
    //await page.click('#login-button');
    //await page.click('.submit-button.btn_action');
    //await page.click('input[name="login-button"]');
    //await page.click('input[value="Login"]');
    //await page.locator('[data-test="login-button"]').click();
    
    /*await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('.shopping_cart_link')).toBeVisible();

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();
    */

/*
Receipt Number: 847392

const receiptText = await page
  .locator('.receipt-number').textContent();

console.log(receiptText);

const orderNumber = await page
  .locator('.complete-header')
  .textContent();

expect(orderNumber).toMatch(/\d+/);


SPLIT
const text = await page
  .locator('.receipt')
  .textContent();

const receiptNo = text.split(':')[1].trim();

console.log(receiptNo);




*/


  });
}