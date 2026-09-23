import { generate } from 'multiple-cucumber-html-reporter';

generate({
  jsonDir: './cucumber-json',
  reportPath: './test-results/html-report',
  reportName: 'Automation Test Report',
  pageTitle: 'Automation Test Report',
  displayDuration: true
});