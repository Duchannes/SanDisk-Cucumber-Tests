/* eslint-disable no-unused-vars */
"use strict";
let { Then, When, Given } = require(`cucumber`);
const expect = require(`chai`).expect;
const path = require(`path`);
const elementHelper = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).getPageObjectElement;
const multiplyElementHelper = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).getIncludedPageObjectElement;
const getJsonObjFromAlliasName = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`)).getJsonObj;
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

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
    let arrayOfAliases = await alias.split(` > `);
    const parentAlias = await arrayOfAliases.shift();
    const parentObj = await getJsonObjFromAlliasName(parentAlias);
    const parentElements = await elementHelper(parentAlias);
    return await multiplyElementHelper(parentObj, arrayOfAliases, ...parentElements);
  } else {
    return elementHelper(alias).click();
  }
});
