import { test } from '../../src/fixtures';

test.describe('Home page', () => {
  test('should load successfully', async ({ homePage }) => {
    await homePage.open();
    await homePage.verifyPageLoaded();
  });
});