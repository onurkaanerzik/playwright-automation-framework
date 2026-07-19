import { type Locator, type Page } from '@playwright/test';

export class Header {
  readonly logo: Locator;

  constructor(private readonly page: Page) {
    this.logo = page.getByRole('banner');
  }
}