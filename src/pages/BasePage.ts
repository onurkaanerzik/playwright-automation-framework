import { Page } from '@playwright/test';
import { Logger } from '../utils';

export abstract class BasePage {
  protected readonly page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }

  async navigate(path = '/'): Promise<void> {
    Logger.info(`Navigating to "${path}"`);

    await this.page.goto(path, {
      waitUntil: 'domcontentloaded',
    });

    Logger.success('Navigation completed');
  }

  async reload(): Promise<void> {
    Logger.info('Reloading page');

    await this.page.reload({
      waitUntil: 'domcontentloaded',
    });

    Logger.success('Page reloaded');
  }

  async goBack(): Promise<void> {
    Logger.info('Navigating back');

    await this.page.goBack({
      waitUntil: 'domcontentloaded',
    });

    Logger.success('Back navigation completed');
  }

  async takeScreenshot(name: string): Promise<void> {
    Logger.info(`Taking screenshot: "${name}"`);

    await this.page.screenshot({
      path: `test-results/screenshots/${name}.png`,
      fullPage: true,
    });

    Logger.success('Screenshot captured');
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }
}