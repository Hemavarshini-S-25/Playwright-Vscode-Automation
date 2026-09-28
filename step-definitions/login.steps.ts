import { Given, When,Then } from '@cucumber/cucumber';
import { setDefaultTimeout } from '@cucumber/cucumber';

import { chromium, Browser, Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
// import { CompanyPage } from '../Pages/CompanyPage';
import { log } from '../Support/logger';

setDefaultTimeout(50000);


let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('I open the login page', async function () {
  log('Starting browser');


  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage =  new LoginPage(page);
  
  this.page = page;//add to fix that problem  add company 

  log('Browser opened successfully');
  
  log('Opening login page');


  await page.goto('https://test.smartassetspro.com/login');

  log('Login page opened successfully');
});

When('I enter the email', async function () {

  log('Entering email');

  await loginPage.enterEmail('s.hemavarshini25@gmail.com');

  log('Email entered successfully');

});

When('I enter the password', async function () {
  log('Entering password');

  await loginPage.enterPassword('Lev@12345');

  log('Password entered successfully');

});

When('I click the login button', async function () {

  log('Clicking login button');

  await loginPage.clickLogin();

  log('Login button clicked successfully');

});

Then('the login should be successful', async function () {
  log('Login completed successfully');

  console.log('Login completed');

});

