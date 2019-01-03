/* eslint-disable no-unused-vars */
"use strict";
let { Then, When, Given } = require(`cucumber`);
const expect = require(`chai`).expect;
const path = require(`path`);
const elementHelper = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).getPageObjectElement;
const elementFinder = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).nestedElement;
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const pageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
  notArg = notArg ? ` not` : ``;
  let element = await elementHelper(alias);
  let elementText = await element.getText();
  logger.info(`Text of ${alias} should${notArg} contain ${textToContain}`);
  return expect(elementText.toLowerCase()).to.include(textToContain.toLowerCase());
});

When(/^I click "([^"]*)"$/, async (alias) => {
  logger.info(`I click ${alias}`);
  if (alias.includes(`>`)) {
    let arrayOfAliases = alias.split(` > `);
    let parentAlias = arrayOfAliases.shift();
    let parentJSON = (await pageSelector.getPage())[parentAlias];
    let elemToClick = await elementFinder(parentJSON, arrayOfAliases);
    console.log(elemToClick);
    return elemToClick.click();
  }
});
