import { test, expect } from '../../src/fixtures';
import { productMockHandler } from '../../src/mocks/handlers/products.handler';
import { mockedProducts } from '../../src/mocks/data/products.mock';

test.describe(
  'Product API Mocking',
  { tag: ['@ui', '@mock'] },
  () => {
    test(
      'should intercept product API response',
      async ({ page }) => {
        let requestIntercepted = false;

        await page.route(
          '**/products',
          async (route) => {
            requestIntercepted = true;

            await productMockHandler(route);
          },
        );

        await page.goto('/');

        expect(requestIntercepted).toBe(false);
        expect(mockedProducts.length).toBe(2);
      },
    );
  },
);