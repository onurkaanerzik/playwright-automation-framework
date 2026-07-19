import { test } from '../../src/fixtures';

test.describe('Purchase Flow', { tag: ['@ui', '@regression'] }, () => {
  test('should complete a product purchase successfully', async ({
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
    products,
    customer,
  }) => {
    const productName = products.backpack.name;

    await test.step('Verify authenticated user session', async () => {
      await inventoryPage.open();
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
        customer.firstName,
        customer.lastName,
        customer.postalCode,
      );

      await checkoutStepOnePage.continueCheckout();
    });

    await test.step('Review and finish the order', async () => {
      await checkoutStepTwoPage.verifyPageLoaded();

      await checkoutStepTwoPage.verifyProductExists(productName);

      await checkoutStepTwoPage.verifyPriceSummaryVisible();

      await checkoutStepTwoPage.finishCheckout();
    });

    await test.step('Verify the order was completed', async () => {
      await checkoutCompletePage.verifyPageLoaded();

      await checkoutCompletePage.verifyOrderCompleted();
    });
  });

  test('should complete a multi-product purchase successfully', async ({
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage,
    products,
    customer,
  }) => {
    const selectedProducts = [
      products.backpack.name,
      products.bikeLight.name,
      products.onesie.name,
    ];

    await inventoryPage.open();

    await inventoryPage.verifyPageLoaded();

    for (const productName of selectedProducts) {
      await inventoryPage.addProductToCart(productName);
    }

    await inventoryPage.verifyCartItemCount(selectedProducts.length);

    await inventoryPage.openCart();

    await cartPage.verifyPageLoaded();

    for (const productName of selectedProducts) {
      await cartPage.verifyProductExists(productName);
    }

    await cartPage.proceedToCheckout();

    await checkoutStepOnePage.verifyPageLoaded();

    await checkoutStepOnePage.fillCustomerInformation(
      customer.firstName,
      customer.lastName,
      customer.postalCode,
    );

    await checkoutStepOnePage.continueCheckout();

    await checkoutStepTwoPage.verifyPageLoaded();

    for (const productName of selectedProducts) {
      await checkoutStepTwoPage.verifyProductExists(productName);
    }

    await checkoutStepTwoPage.verifyPriceSummaryVisible();

    await checkoutStepTwoPage.finishCheckout();

    await checkoutCompletePage.verifyPageLoaded();

    await checkoutCompletePage.verifyOrderCompleted();
  });
});
