import { test } from '../../src/fixtures';

test.describe('Inventory', { tag: ['@ui', '@regression'] }, () => {
  test('should sort products by name ascending', async ({ inventoryPage }) => {
    await inventoryPage.open();

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.sortProducts('az');

    await inventoryPage.verifyProductsSortedByNameAscending();
  });

  test('should sort products by price descending', async ({ inventoryPage }) => {
    await inventoryPage.open();

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.sortProducts('hilo');

    await inventoryPage.verifyProductsSortedByPriceDescending();
  });
});
