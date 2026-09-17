

import { When } from '@cucumber/cucumber';
import { CompanyPage } from '../Pages/CompanyPage';

let companyPage: CompanyPage;

When('I select a company', async function () {
  companyPage = new CompanyPage(this.page);

  await companyPage.selectCompany();
});

When('I click OK', async function () {
  await companyPage.clickOk();
});

When('I click System', async function () {
  await companyPage.clickSystem();
});

When('I click Company', async function () {
  await companyPage.clickCompany();
});

When('I click Add', async function () {
  await companyPage.clickAdd();
});
