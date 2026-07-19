import { type Locator, type Page } from '@playwright/test';

export class CookieBanner {
  readonly acceptButton: Locator;

  constructor(private readonly page: Page) {
    this.acceptButton = page.getByRole('button', {
      name: /accept/i,
    });
  }

  async acceptCookies(): Promise<void> {
    await this.acceptButton.click();
  }
}