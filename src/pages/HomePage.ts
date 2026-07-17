import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL('/');
  }
}