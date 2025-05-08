import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
  // --- Locators ---
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly signupButton: Locator;
  private readonly genderRadio: Locator;
  private readonly passwordInput: Locator;
  private readonly daySelect: Locator;
  private readonly monthSelect: Locator;
  private readonly yearSelect: Locator;
  private readonly createAccountButton: Locator;

  constructor(private page: Page) {
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.genderRadio = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.daySelect = page.locator('#days');
    this.monthSelect = page.locator('#months');
    this.yearSelect = page.locator('#years');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
  }

  // --- Utility ---
  private generateRandomEmail(): string {
    const timestamp = Date.now();
    return `user_${timestamp}@example.com`;
  }

  // --- Methods ---
  async enterBasicInfo(name: string, email: string): Promise<string> {
    const randomEmail = this.generateRandomEmail();
    await this.nameInput.fill(name);
    await this.emailInput.fill(randomEmail);
    await this.signupButton.click();
    return randomEmail; // return email if needed in later steps
  }

  async fillAdditionalDetails(password: string): Promise<void> {
    await this.genderRadio.check();
    await this.passwordInput.fill(password);
    await this.daySelect.selectOption('1');
    await this.monthSelect.selectOption('1');
    await this.yearSelect.selectOption('2000');
    await this.createAccountButton.click();
  }
}
