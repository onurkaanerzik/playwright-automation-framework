import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class InventoryPage extends BasePage {
  // Locators
  private readonly pageTitle: Locator;
  private readonly appLogo: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText('Products', {
      exact: true,
    });

    this.appLogo = page.getByText('Swag Labs', {
      exact: true,
    });

    this.shoppingCartLink = page.locator(
      '[data-test="shopping-cart-link"]',
    );

    this.cartBadge = page.locator(
      '[data-test="shopping-cart-badge"]',
    );
  }

  // Verification Methods
  async verifyPageLoaded(): Promise<void> {
    Logger.info('Verifying inventory page is loaded');

    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.pageTitle).toBeVisible();
    await expect(this.appLogo).toBeVisible();
  }

  async verifyCartItemCount(
    expectedCount: number,
  ): Promise<void> {
    Logger.info(
      `Verifying cart item count: ${expectedCount}`,
    );

    await expect(this.cartBadge).toHaveText(
      expectedCount.toString(),
    );
  }

  // Business Actions
  async addProductToCart(
    productName: string,
  ): Promise<void> {
    Logger.info(
      `Adding product to cart: "${productName}"`,
    );

    await this.page
      .locator('.inventory_item')
      .filter({
        has: this.page.getByText(productName),
      })
      .getByRole('button', {
        name: /Add to cart/i,
      })
      .click();
  }

  async openCart(): Promise<void> {
    Logger.info('Opening shopping cart');

    await this.shoppingCartLink.click();
  }
}