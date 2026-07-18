import { test } from '../../src/fixtures';

test.describe('Cart', () => {
  test('should add a product to the cart', async ({
    loginPage,
    inventoryPage,
    cartPage,
  }) => {
    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce',
    );

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack',
    );

    await inventoryPage.verifyCartItemCount(1);

    await inventoryPage.openCart();

    await cartPage.verifyPageLoaded();

    await cartPage.verifyProductExists(
      'Sauce Labs Backpack',
    );
  });

  test('should remove a product from the cart', async ({
    loginPage,
    inventoryPage,
    cartPage,
  }) => {
    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce',
    );

    await inventoryPage.verifyPageLoaded();

    await inventoryPage.addProductToCart(
      'Sauce Labs Backpack',
    );

    await inventoryPage.openCart();

    await cartPage.verifyPageLoaded();

    await cartPage.removeProduct(
      'Sauce Labs Backpack',
    );

    await cartPage.verifyProductDoesNotExist(
      'Sauce Labs Backpack',
    );
  });
});