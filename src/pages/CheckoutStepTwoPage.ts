import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class CheckoutStepTwoPage extends BasePage {
  // Locators
  private readonly pageTitle: Locator;
  private readonly finishButton: Locator;
  private readonly cancelButton: Locator;
  private readonly itemTotal: Locator;
  private readonly tax: Locator;
  private readonly total: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText(
      'Checkout: Overview',
      {
        exact: true,
      },
    );

    this.finishButton = page.locator(
      '[data-test="finish"]',
    );

    this.cancelButton = page.locator(
      '[data-test="cancel"]',
    );

    this.itemTotal = page.locator(
      '[data-test="subtotal-label"]',
    );

    this.tax = page.locator(
      '[data-test="tax-label"]',
    );

    this.total = page.locator(
      '[data-test="total-label"]',
    );
  }

  // Business Actions
  async finishCheckout(): Promise<void> {
    Logger.info('Finishing checkout');

    await this.finishButton.click();
  }

  async cancelCheckout(): Promise<void> {
    Logger.info('Cancelling checkout');

    await this.cancelButton.click();
  }

  // Verification Methods
  async verifyPageLoaded(): Promise<void> {
    Logger.info(
      'Verifying checkout overview page is loaded',
    );

    await expect(this.page).toHaveURL(
      /checkout-step-two\.html/,
    );

    await expect(this.pageTitle).toBeVisible();
  }

  async verifyProductExists(
    productName: string,
  ): Promise<void> {
    Logger.info(
      `Verifying checkout product exists: "${productName}"`,
    );

    await expect(
      this.getCheckoutItem(productName),
    ).toBeVisible();
  }

  async verifyPriceSummaryVisible(): Promise<void> {
    Logger.info('Verifying price summary is visible');

    await expect(this.itemTotal).toBeVisible();
    await expect(this.tax).toBeVisible();
    await expect(this.total).toBeVisible();
  }

  // Private Helpers
  private getCheckoutItem(
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