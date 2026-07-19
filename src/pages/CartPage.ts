import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class CartPage extends BasePage {
  // Locators
  private readonly pageTitle: Locator;
  private readonly checkoutButton: Locator;
  private readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText('Your Cart', {
      exact: true,
    });

    this.checkoutButton = page.locator(
      '[data-test="checkout"]',
    );

    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]',
    );
  }

  // Business Actions
  async removeProduct(
    productName: string,
  ): Promise<void> {
    Logger.info(
      `Removing product from cart: "${productName}"`,
    );

    await this.getCartItem(productName)
      .getByRole('button', {
        name: /Remove/i,
      })
      .click();
  }

  async proceedToCheckout(): Promise<void> {
    Logger.info('Proceeding to checkout');

    await this.checkoutButton.click();
  }

  async continueShopping(): Promise<void> {
    Logger.info('Continuing shopping');

    await this.continueShoppingButton.click();
  }

  // Verification Methods
  async verifyPageLoaded(): Promise<void> {
    Logger.info('Verifying cart page is loaded');

    await expect(this.page).toHaveURL(/cart\.html/);
    await expect(this.pageTitle).toBeVisible();
  }

  async verifyProductExists(
    productName: string,
  ): Promise<void> {
    Logger.info(
      `Verifying product exists: "${productName}"`,
    );

    await expect(
      this.getCartItem(productName),
    ).toBeVisible();
  }

  async verifyProductDoesNotExist(
    productName: string,
  ): Promise<void> {
    Logger.info(
      `Verifying product does not exist: "${productName}"`,
    );

    await expect(
      this.getCartItem(productName),
    ).toHaveCount(0);
  }

  // Private Helpers
  private getCartItem(
    productName: string,
  ): Locator {
    return this.page
      .locator('.cart_item')
      .filter({
        has: this.page.getByText(productName, {
          exact: true,
        }),
      });
  }
}