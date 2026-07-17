const { test, expect } = require('@playwright/test');

const { login } = require('./util');

test('login helper test', async ({ page }) => {

    await login(page, "standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);

});