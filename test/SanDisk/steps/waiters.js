/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";
let { Then, When, Given } = require(`cucumber`);
const path = require(`path`);
const elementHelper = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).getPageObjectElement;
const expectedCondition = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).expectedCondition;
const tabCondition = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).tabCondition;
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I wait until "([^"]*)" is (.*)$/, async (alias, shouldBe) => {
  let element = await elementHelper(alias);
  logger.debug(element);
  let expectedConditionFunction = expectedCondition(shouldBe);
  logger.info(`I wait until ${alias} is ${shouldBe}`);
  return browser.wait(expectedConditionFunction(element), CLICKABLE_TIMEOUT);
});

When(/^I wait for "([^"]*)" seconds$/, async (seconods) => {
  logger.info(`I wait for ${seconods} seconds`);
  return browser.sleep(seconods * 1000);
});

When(/^I wait until number of tabs became "([^"]*)"$/, async (number) => {
  logger.info(`I wait until number of tabs became ${number}`);
  return browser.wait(tabCondition(number), 5000);
});
