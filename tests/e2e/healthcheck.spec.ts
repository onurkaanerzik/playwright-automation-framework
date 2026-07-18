import { expect, test } from '@playwright/test';

test.describe('Framework health check', () => {
  test(
    'should open the configured application @ui @smoke',
    async ({ page }) => {
      await page.goto('/');

      await expect(page).toHaveTitle('Swag Labs');
    },
  );
});