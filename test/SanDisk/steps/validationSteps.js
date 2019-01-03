/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";
let { Then, When, Given } = require(`cucumber`);
const expect = require(`chai`).expect;
const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const stepFunctions = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`));
const angularManager = require(path.resolve(`./test/SanDisk/utils/angularManager.js`));

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
  notArg = notArg ? ` not` : ``;
  let element = await stepFunctions.getPageObjectElement(alias);
  let elementText = await element.getText();
  logger.info(`Text of ${alias} should${notArg} contain ${textToContain}`);
  return expect(elementText.toLowerCase()).to.include(textToContain.toLowerCase());
});

Then(/^I get tab title$/, async () => {
  logger.info(`I get tab title`);
  logger.debug(await browser.getTitle());
  return browser.getTitle();
});

When(/^I click "([^"]*)"$/, async (alias) => {
  logger.info(`I click ${alias}`);
  return (await stepFunctions.getPageObjectElement(alias)).click();
});

When(/^I switch to "([^"]*)" tab$/, async (number) => { // next, previous, any number
  logger.info(`I switch to ${number} tab`);
  const tab = await stepFunctions.getTab(number);
  browser.switchTo().window(tab);
  angularManager.manage();
  return browser.refresh(1000);
});

When(/^I type "([^"]*)" at "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click ${alias}`);
  return (await stepFunctions.getPageObjectElement(alias)).sendKeys(text);
});

When(/^I click "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click [${text}] text in [${alias}]`);
  const el = await stepFunctions.getElementFromCollectionByText(alias, text);
  return el.click();
});
