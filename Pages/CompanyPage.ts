
import { Page } from '@playwright/test';

export class CompanyPage {

  constructor(private page: Page) {}

  async selectCompany() {
    await this.page.locator(
      '//*[@class="k-input-inner"]'
    ).click();
  }

  async clickOk() {
    await this.page.locator('//*[@id="save"]').click();
  }
  async clickSystem() {

  await this.page.getByText('System', { exact: true }).click();

}
async clickCompany() {

  await this.page.getByText(
    'Company',
    { exact: true }
  ).click();

}
 
  async clickAdd() {
    await this.page.locator('//*[@id="add"]').click();
  }

}

