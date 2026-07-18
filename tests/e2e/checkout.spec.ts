import { test } from '../../src/fixtures';

test.describe(
  'Checkout Validation',
  { tag: ['@ui', '@negative', '@regression'] },
  () => {
    test(
      'should require customer information before continuing',
      async ({
        loginPage,
        inventoryPage,
        cartPage,
        checkoutStepOnePage,
      }) => {
        const productName =
          'Sauce Labs Backpack';

        await loginPage.open();

        await loginPage.login(
          'standard_user',
          'secret_sauce',
        );

        await inventoryPage.verifyPageLoaded();

        await inventoryPage.addProductToCart(
          productName,
        );

        await inventoryPage.openCart();

        await cartPage.verifyPageLoaded();

        await cartPage.proceedToCheckout();

        await checkoutStepOnePage.verifyPageLoaded();

        await checkoutStepOnePage.continueCheckout();

        await checkoutStepOnePage.verifyValidationMessage(
          'First Name is required',
        );
      },
    );
  },
);