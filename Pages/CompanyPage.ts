
import { Page } from '@playwright/test';

export class CompanyPage {

  constructor(private page: Page) {}

  async selectCompany() {
    await this.page.locator(
      '//*[@id="k-7a50ae99-5b8a-4b74-b4c4-73d59096117e"]'
    ).click();
  }

  async clickOk() {
    await this.page.locator('//*[@id="save"]').click();
  }

  async clickSystem() {
    await this.page.locator(
      '//*[@class="display-flex-center ng-star-inserted"]'
    ).click();
  }

  async clickCompany() {
    await this.page.locator(
      '//*[@class="submnutext submenu-label-pos"]'
    ).click();
  }

  async clickAdd() {
    await this.page.locator('//*[@id="add"]').click();
  }

}