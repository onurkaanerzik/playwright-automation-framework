import { test } from '../../src/fixtures';

test.describe(
  'Price Validation',
  { tag: ['@ui', '@regression'] },
  () => {
    test(
      'should display the correct price summary during checkout',
      async ({
        inventoryPage,
        cartPage,
        checkoutStepOnePage,
        checkoutStepTwoPage,
        customer,
        products,
      }) => {
        const productName = products.backpack.name;

        await inventoryPage.open();

        await inventoryPage.verifyPageLoaded();

        await inventoryPage.addProductToCart(
          productName,
        );

        await inventoryPage.openCart();

        await cartPage.proceedToCheckout();

        await checkoutStepOnePage.fillCustomerInformation(
          customer.firstName,
          customer.lastName,
          customer.postalCode,
        );

        await checkoutStepOnePage.continueCheckout();

        await checkoutStepTwoPage.verifyPageLoaded();

        await checkoutStepTwoPage.verifyItemTotal(
          'Item total: $29.99',
        );

        await checkoutStepTwoPage.verifyTax(
          'Tax: $2.40',
        );

        await checkoutStepTwoPage.verifyTotal(
          'Total: $32.39',
        );
      },
    );
  },
);