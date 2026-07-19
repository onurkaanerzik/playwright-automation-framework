import { type Locator, type Page } from '@playwright/test';
import { Logger } from '../utils';

export class NavigationBar {
  readonly navigation: Locator;

  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;

  constructor(private readonly page: Page) {
    this.navigation = page.locator('.bm-menu-wrap');

    this.menuButton = page.getByRole('button', {
      name: 'Open Menu',
    });

    this.logoutLink = page.getByRole('link', {
      name: 'Logout',
    });
  }

  async logout(): Promise<void> {
    Logger.info('Logging out');

    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
