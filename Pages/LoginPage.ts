import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  email = '//input[@id="loginEmail"]';

  
  password = '//input[@id="loginPwd"]';

  loginButton = '//button[@type="submit"]';

  async enterEmail(email: string) {
    await this.page.locator(this.email).fill(email);
  }

  async enterPassword(password: string) {
    await this.page.locator(this.password).fill(password);
  }

  async clickLogin() {
    await this.page.locator(this.loginButton).click();
  }
}