import { expect, test } from '../../src/fixtures';

test.describe('Framework health check', () => {
  test('should open the configured application', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Example Domain');
  });
});