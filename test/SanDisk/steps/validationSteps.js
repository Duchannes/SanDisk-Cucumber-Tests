/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";
let { Then, When, Given } = require(`cucumber`);
const expect = require(`chai`).expect;
const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const elementHelper = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).getPageObjectElement;

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
  notArg = notArg ? ` not` : ``;
  let element = await elementHelper(alias);
  let elementText = await element.getText();
  logger.info(`Text of ${alias} should${notArg} contain ${textToContain}`);
  return expect(elementText.toLowerCase()).to.include(textToContain.toLowerCase());
});

When(/^I click "([^"]*)"$/, async (alias) => {
  logger.info(`I click ${alias}`);
  return (await elementHelper(alias)).click();
});

When(/^I switch to "([^"]*)" tab$/, async (number) => {
  logger.info(`I switch to ${number} tab`);
  const tab = (await browser.getAllWindowHandles())[number - 1];
  browser.switchTo().window(tab);
  browser.waitForAngularEnabled(false);
  return browser.refresh(1000);
});

When(/^I write "([^"]*)" at "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click ${alias}`);
  return (await elementHelper(alias)).sendKeys(text);
});
