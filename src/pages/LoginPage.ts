import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });
    this.errorMessage = page.locator(
      '[data-test="error"]',
    );
  }

  async open(): Promise<void> {
    await this.navigate('/');
  }

  async login(
    username: string,
    password: string,
  ): Promise<void> {
    Logger.info(`Logging in as "${username}"`);

    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async verifyPageLoaded(): Promise<void> {
    Logger.info('Verifying login page is loaded');

    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async verifyErrorMessage(
    expectedMessage: string,
  ): Promise<void> {
    Logger.info(
      `Verifying login error message: "${expectedMessage}"`,
    );

    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(
      expectedMessage,
    );
  }

  private async fillUsername(
    username: string,
  ): Promise<void> {
    Logger.info('Filling username');

    await this.usernameInput.fill(username);
  }

  private async fillPassword(
    password: string,
  ): Promise<void> {
    Logger.info('Filling password');

    await this.passwordInput.fill(password);
  }

  private async clickLogin(): Promise<void> {
    Logger.info('Clicking login button');

    await this.loginButton.click();
  }
}