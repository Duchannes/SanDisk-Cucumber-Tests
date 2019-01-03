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

When(/^I get text in "([^"]*)"$/, async (alias) => {
  logger.info(`I click ${alias}`);
  const elements = await stepFunctions.getPageObjectElement(alias);
  if (Array.isArray(elements)) {
    logger.debug(elements.length);
    for (let i = 0; i < elements.length; i++) {
      logger.debug(await elements[i].getText());
    };
  } else {
    logger.debug(await elements.getText());
  }
  return true;
});

When(/^I switch to "([^"]*)" tab$/, async (number) => { // next, previous, any number
  logger.info(`I switch to ${number} tab`);
  const tab = await stepFunctions.getTab(number);
  browser.switchTo().window(tab);
  angularManager.manage();
  return browser.refresh(1000);
});

When(/^I write "([^"]*)" at "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click ${alias}`);
  return (await stepFunctions.getPageObjectElement(alias)).sendKeys(text);
});

When(/^I click "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click [${text}] text in [${alias}]`);
  const el = await stepFunctions.getElementFromCollectionByText(alias, text);
  return el.click();
});

Then(/^Page title should( not)? be "([^"]*)"$/, async (notArg, text) => {
  notArg = notArg ? ` not` : ``;
  let pageTitle = await browser.getTitle();
  logger.info(`Page title should${notArg} be ${text}`);
  if (notArg) {
    return expect(pageTitle).to.not.equal(text);
  } else {
    return expect(pageTitle).to.be.equal(text);
  }
});

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
  notArg = notArg ? ` not` : ``;
  let element = stepFunctions.getPageObjectElement(alias);
  let result = await element.count();
  expectedNumber = parseInt(expectedNumber);
  logger.info(`Count of ${alias} should${notArg} be ${expectedNumber}`);
  if (notArg) {
    return expect(result).to.not.equal(expectedNumber);
  } else {
    return expect(result).to.equal(expectedNumber);
  }
});

Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
  notArg = notArg ? ` not` : ``;
  logger.info(`${alias} should${notArg} be visible`);
  let element = await stepFunctions.getPageObjectElement(alias);
  let result = await element.isPresent();
  return expect(result).to.be.equal(!notArg);
});
