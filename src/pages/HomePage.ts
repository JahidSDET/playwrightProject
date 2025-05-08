import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly signupLoginLink: Locator;

  constructor(private page: Page) {
    this.signupLoginLink = page.locator('a[href="/login"]');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com');
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }
}
