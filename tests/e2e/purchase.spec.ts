import { test } from '../../src/fixtures/app.fixture';

test.describe('Purchase Flow', () => {
  test('should complete a product purchase successfully', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
  }) => {
    const productName = 'Sauce Labs Backpack';

    await test.step('Login with a valid customer account', async () => {
      await loginPage.open();
      await loginPage.login(
        'standard_user',
        'secret_sauce',
      );

      await inventoryPage.verifyPageLoaded();
    });

    await test.step('Add the product to the shopping cart', async () => {
      await inventoryPage.addProductToCart(productName);
      await inventoryPage.verifyCartItemCount(1);
      await inventoryPage.openCart();

      await cartPage.verifyPageLoaded();
      await cartPage.verifyProductExists(productName);
    });

    await test.step('Enter checkout information', async () => {
      await cartPage.proceedToCheckout();

      await checkoutStepOnePage.verifyPageLoaded();
      await checkoutStepOnePage.fillCustomerInformation(
        'John',
        'Doe',
        '10115',
      );
      await checkoutStepOnePage.continueCheckout();
    });

    await test.step('Review and finish the order', async () => {
      await checkoutStepTwoPage.verifyPageLoaded();
      await checkoutStepTwoPage.verifyProductExists(
        productName,
      );
      await checkoutStepTwoPage.verifyPriceSummaryVisible();
      await checkoutStepTwoPage.finishCheckout();
    });

    await test.step('Verify the order was completed', async () => {
      await checkoutCompletePage.verifyPageLoaded();
      await checkoutCompletePage.verifyOrderCompleted();
    });
  });
});