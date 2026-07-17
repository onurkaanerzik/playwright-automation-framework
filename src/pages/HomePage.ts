import { expect, Locator, Page } from '@playwright/test';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { NavigationBar } from '../components/NavigationBar';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly header: Header;
  readonly footer: Footer;
  readonly navigationBar: NavigationBar;

  private readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.header = new Header(page);
    this.footer = new Footer(page);
    this.navigationBar = new NavigationBar(page);

    this.pageHeading = page.getByRole('heading', {
      name: 'Example Domain',
    });
  }

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();
  }
}