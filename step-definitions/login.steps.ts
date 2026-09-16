import { Given, When,Then } from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';

import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { CompanyPage } from '../Pages/CompanyPage';

setDefaultTimeout(50000);



let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('I open the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage =  new LoginPage(page);

  await page.goto('https://test.smartassetspro.com/login');
});

When('I enter the email', async function () {

  await loginPage.enterEmail('s.hemavarshini25@gmail.com');

});

When('I enter the password', async function () {

  await loginPage.enterPassword('Lev@12345');

});

When('I click the login button', async function () {

  await loginPage.clickLogin();

});

Then('the login should be successful', async function () {

  console.log('Login completed');

});

When('I select a company', async function () {
  const companyPage = new CompanyPage(page);

  await companyPage.selectCompany();
});

When('I click OK', async function () {
  const companyPage = new CompanyPage(page);

  await companyPage.clickOk();
});

When('I click System', async function () {
  const companyPage = new CompanyPage(page);

  await companyPage.clickSystem();
});

When('I click Company', async function () {
  const companyPage = new CompanyPage(page);

  await companyPage.clickCompany();
});

When('I click Add', async function () {
  const companyPage = new CompanyPage(page);

  await companyPage.clickAdd();
});