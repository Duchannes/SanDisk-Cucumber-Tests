/* eslint-disable no-undef */
"use strict";
let { When } = require(`cucumber`);
const path = require(`path`);
const stepFunctions = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`));
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const CLICKABLE_TIMEOUT = 20 * 1000;

When(/^I wait until "([^"]*)" is (visible|clickable|invisible|gone|present)$/, async (alias, shouldBe) => {
  let element = await stepFunctions.getPageObjectElement(alias);
  logger.debug(await element.getText());
  let expectedConditionFunction = stepFunctions.expectedCondition(shouldBe);
  logger.info(`I wait until ${alias} is ${shouldBe}`);
  return browser.wait(expectedConditionFunction(element), CLICKABLE_TIMEOUT);
});

When(/^I wait for "([^"]*)" seconds$/, async (seconods) => {
  logger.info(`I wait for ${seconods} seconds`);
  return browser.sleep(seconods * 1000);
});

When(/^I wait until "([^"]*)" tab appears$/, async (number) => { // next, previous, any number
  logger.info(`I wait until ${number} tab appears`);
  return browser.wait(stepFunctions.tabCondition(number), 5000);
});
