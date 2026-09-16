
import { When } from '@cucumber/cucumber';
import { CompanyPage } from '../Pages/CompanyPage';

When('I select a company', async function () {
  const companyPage = new CompanyPage(this.page);

  await companyPage.selectCompany();
});

When('I click OK', async function () {
  const companyPage = new CompanyPage(this.page);

  await companyPage.clickOk();
});

When('I click System', async function () {
  const companyPage = new CompanyPage(this.page);

  await companyPage.clickSystem();
});

When('I click Company', async function () {
  const companyPage = new CompanyPage(this.page);

  await companyPage.clickCompany();
});

When('I click Add', async function () {
  const companyPage = new CompanyPage(this.page);

  await companyPage.clickAdd();
});