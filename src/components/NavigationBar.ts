import { Locator, Page } from '@playwright/test';

export class NavigationBar {
  readonly navigation: Locator;

  constructor(private readonly page: Page) {
    this.navigation = page.getByRole('navigation');
  }
}