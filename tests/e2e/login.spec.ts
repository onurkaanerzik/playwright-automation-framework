import { test } from '../../src/fixtures';

test.describe('Login', () => {
  test('should login successfully with valid credentials', async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce',
    );

    await inventoryPage.verifyPageLoaded();
  });

  test('should display an error for invalid credentials', async ({
    loginPage,
  }) => {
    await loginPage.open();

    await loginPage.login(
      'invalid_user',
      'invalid_password',
    );

    await loginPage.verifyErrorMessage(
      'Username and password do not match',
    );
  });
});