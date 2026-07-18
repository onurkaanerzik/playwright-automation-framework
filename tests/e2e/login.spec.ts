import { test } from '../../src/fixtures/app.fixture';

test.describe('Login', () => {
  test(
    'should display an error for invalid credentials @ui @negative @regression',
    async ({ loginPage }) => {
      await loginPage.open();

      await loginPage.login(
        'invalid_user',
        'invalid_password',
      );

      await loginPage.verifyErrorMessage(
        'Username and password do not match any user in this service',
      );
    },
  );

  test(
    'should display an error for a locked user @ui @negative @regression',
    async ({ loginPage }) => {
      await loginPage.open();

      await loginPage.login(
        'locked_out_user',
        'secret_sauce',
      );

      await loginPage.verifyErrorMessage(
        'Sorry, this user has been locked out',
      );
    },
  );
});