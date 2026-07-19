import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils';

export class CheckoutStepOnePage extends BasePage {
  // Locators
  private readonly pageTitle: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly postalCodeInput: Locator;
  private readonly continueButton: Locator;
  private readonly cancelButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByText(
      'Checkout: Your Information',
      {
        exact: true,
      },
    );

    this.firstNameInput = page.locator(
      '[data-test="firstName"]',
    );

    this.lastNameInput = page.locator(
      '[data-test="lastName"]',
    );

    this.postalCodeInput = page.locator(
      '[data-test="postalCode"]',
    );

    this.continueButton = page.locator(
      '[data-test="continue"]',
    );

    this.cancelButton = page.locator(
      '[data-test="cancel"]',
    );

    this.errorMessage = page.locator(
      '[data-test="error"]',
    );
  }

  // Business Actions
  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ): Promise<void> {
    Logger.info('Filling customer information');

    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout(): Promise<void> {
    Logger.info('Continuing checkout');

    await this.continueButton.click();
  }

  async cancelCheckout(): Promise<void> {
    Logger.info('Cancelling checkout');

    await this.cancelButton.click();
  }

  // Verification Methods
  async verifyPageLoaded(): Promise<void> {
    Logger.info(
      'Verifying checkout information page is loaded',
    );

    await expect(this.page).toHaveURL(
      /checkout-step-one\.html/,
    );

    await expect(this.pageTitle).toBeVisible();
  }

  async verifyValidationMessage(
    expectedMessage: string,
  ): Promise<void> {
    Logger.info(
      `Verifying validation message: "${expectedMessage}"`,
    );

    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(
      expectedMessage,
    );
  }
}