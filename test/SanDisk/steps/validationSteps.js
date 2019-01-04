/* eslint-disable no-undef */
"use strict";
let { Then } = require(`cucumber`);
const expect = require(`chai`).expect;
const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const stepFunctions = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`));

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
  notArg = notArg ? ` not` : ``;
  let element = await stepFunctions.getPageObjectElement(alias);
  let elementText = await element.getText();
  logger.info(`Text of ${alias} should ${notArg} contain ${textToContain}`);
  return expect(elementText.toLowerCase()).to.include(textToContain.toLowerCase());
});

Then(/^Text of each "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
  notArg = notArg ? ` not` : ``;
  let elements = await stepFunctions.getPageObjectElement(alias);
  let wrongStrings = [];
  for (let i = 0; i < elements.length; i++) {
    if (!(await elements[i].getText()).includes(textToContain)) {
      wrongStrings.push(await elements[i].getText());
    }
  }
  logger.info(`Text of each ${alias} should${notArg} contain ${textToContain}`);
  return wrongStrings.length ? Promise.reject(new Error(`Strings not containing "${textToContain}":\n${wrongStrings.join(`\n`)}`)) : Promise.resolve();
});

Then(/^Page title should( not)? contain "([^"]*)"$/, async (notArg, text) => {
  notArg = notArg ? ` not` : ``;
  let pageTitle = await browser.getTitle();
  logger.info(`Page title should ${notArg} be ${text}`);
  if (notArg) {
    return expect(pageTitle).to.not.include(text);
  } else {
    return expect(pageTitle).to.be.include(text);
  }
});

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
  notArg = notArg ? ` not` : ``;
  let element = await stepFunctions.getPageObjectElement(alias);
  let result = await element.length;
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

Then(/^"([^"]*)" should be equal to "([^"]*)"$/, async (alias, text) => {
  logger.info(`${alias} should be qual to ${text}`);
  let element = await stepFunctions.getPageObjectElement(alias);
  return expect(await element.getText()).to.be.equal(text);
});
