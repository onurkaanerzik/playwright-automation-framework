import { expect, test } from '../../src/fixtures';
import { usersMockHandler } from '../../src/mocks/handlers/users.handler';

test.describe(
  'API Mocking',
  { tag: ['@api', '@mock'] },
  () => {
    test(
      'should mock API response',
      async ({ page }) => {
        await page.route(
          '**/users/1',
          usersMockHandler,
        );

        await page.goto(
          'https://jsonplaceholder.typicode.com/users/1',
        );

        const body =
          await page.locator('body').innerText();

        expect(body).toContain(
          'Onur Erzik',
        );
      },
    );
  },
);