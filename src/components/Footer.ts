import { type Locator, type Page } from '@playwright/test';

export class Footer {
  readonly footer: Locator;

  constructor(private readonly page: Page) {
    this.footer = page.getByRole('contentinfo');
  }
}
