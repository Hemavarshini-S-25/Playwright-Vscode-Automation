
import { When } from '@cucumber/cucumber';
import { CompanyPage } from '../Pages/CompanyPage';
import { log } from '../Support/logger';

let companyPage: CompanyPage;

When('I select a company', async function () {
  log('Selecting company');

  companyPage = new CompanyPage(this.page);

  log('Company selected successfully');

  await companyPage.selectCompany();
});

When('I click OK', async function () {
  log('Clicking OK button');
  await companyPage.clickOk();
  log('OK button clicked successfully');
});

When('I click System', async function () {
  log('Clicking System');

  await companyPage.clickSystem();
  log('System clicked successfully');
});

When('I click Company', async function () {
  log('Clicking Company');
  await companyPage.clickCompany();
  log('Company clicked successfully');
});

When('I click Add', async function () {
  log('Clicking Add button');
  await companyPage.clickAdd();
  log('Add button clicked successfully');
});
