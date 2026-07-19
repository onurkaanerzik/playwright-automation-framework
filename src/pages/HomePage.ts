import { expect, type Locator, type Page } from '@playwright/test';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly header: Header;
  readonly footer: Footer;
  readonly navigationBar: NavigationBar;

  private readonly appLogo: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new Header(page);
    this.footer = new Footer(page);
    this.navigationBar = new NavigationBar(page);

    this.appLogo = page.locator('.login_logo');
  }

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle('Swag Labs');
    await expect(this.appLogo).toBeVisible();
  }
}