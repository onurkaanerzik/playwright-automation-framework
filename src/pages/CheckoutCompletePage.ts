import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class CheckoutCompletePage extends BasePage {
  // Locators
  private readonly pageTitle: Locator;
  private readonly successMessage: Locator;
  private readonly backHomeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText(
      'Checkout: Complete!',
      {
        exact: true,
      },
    );

    this.successMessage = page.getByText(
      'Thank you for your order!',
      {
        exact: true,
      },
    );

    this.backHomeButton = page.locator(
      '[data-test="back-to-products"]',
    );
  }

  // Business Actions
  async returnToProducts(): Promise<void> {
    Logger.info('Returning to products');

    await this.backHomeButton.click();
  }

  // Verification Methods
  async verifyPageLoaded(): Promise<void> {
    Logger.info(
      'Verifying checkout complete page is loaded',
    );

    await expect(this.page).toHaveURL(
      /checkout-complete\.html/,
    );

    await expect(this.pageTitle).toBeVisible();
  }

  async verifyOrderCompleted(): Promise<void> {
    Logger.info('Verifying order completed');

    await expect(this.successMessage).toBeVisible();
  }
}