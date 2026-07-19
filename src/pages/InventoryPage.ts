import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class InventoryPage extends BasePage {
  private readonly pageTitle: Locator;
  private readonly appLogo: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly cartBadge: Locator;
  private readonly sortDropdown: Locator;
  private readonly productNames: Locator;
  private readonly productPrices: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText('Products', {
      exact: true,
    });

    this.appLogo = page.getByText('Swag Labs', {
      exact: true,
    });

    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');

    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    this.sortDropdown = page.locator('[data-test="product-sort-container"]');

    this.productNames = page.locator('[data-test="inventory-item-name"]');

    this.productPrices = page.locator('[data-test="inventory-item-price"]');
  }
  async open(): Promise<void> {
    Logger.info('Opening inventory page');

    await this.navigate('/inventory.html');
  }

  async verifyPageLoaded(): Promise<void> {
    Logger.info('Verifying inventory page is loaded');

    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.pageTitle).toBeVisible();
    await expect(this.appLogo).toBeVisible();
  }

  async verifyCartItemCount(expectedCount: number): Promise<void> {
    Logger.info(`Verifying cart item count: ${expectedCount}`);

    await expect(this.cartBadge).toHaveText(expectedCount.toString());
  }

  async sortProducts(option: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> {
    Logger.info(`Sorting products by "${option}"`);

    await this.sortDropdown.selectOption(option);
  }

  async verifyProductsSortedByNameAscending(): Promise<void> {
    const actualNames = await this.productNames.allTextContents();

    const expectedNames = [...actualNames].sort((first, second) => first.localeCompare(second));

    expect(actualNames).toEqual(expectedNames);
  }

  async verifyProductsSortedByPriceDescending(): Promise<void> {
    const actualPrices = (await this.productPrices.allTextContents()).map((price) =>
      Number.parseFloat(price.replace('$', '')),
    );

    const expectedPrices = [...actualPrices].sort((first, second) => second - first);

    expect(actualPrices).toEqual(expectedPrices);
  }

  async addProductToCart(productName: string): Promise<void> {
    Logger.info(`Adding product to cart: "${productName}"`);

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
