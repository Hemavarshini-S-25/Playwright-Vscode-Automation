import { Given, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';


let browser: Browser;
let page: Page;

Given('I open the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  await page.goto('https://smartassetspro.com/login');
});

Then('the login page should be displayed', async function () {
  console.log('Login page opened successfully');

});