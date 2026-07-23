import { test } from '../../src/fixtures';
import { products } from '../../src/data/products';

test.describe('Cart', { tag: ['@ui', '@regression'] }, () => {
  test('should add a product to the cart', async ({ inventoryPage, cartPage }) => {
    const productName = products.backpack.name;

    await inventoryPage.open();

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.addProductToCart(productName);

    await inventoryPage.verifyCartItemCount(1);

    await inventoryPage.openCart();

    await cartPage.verifyPageLoaded();

    await cartPage.verifyProductExists(productName);
  });

  test('should remove a product from the cart', async ({ inventoryPage, cartPage }) => {
    const productName = products.backpack.name;

    await inventoryPage.open();

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.addProductToCart(productName);

    await inventoryPage.openCart();

    await cartPage.verifyPageLoaded();

    await cartPage.removeProduct(productName);

    await cartPage.verifyProductDoesNotExist(productName);
  });
});
