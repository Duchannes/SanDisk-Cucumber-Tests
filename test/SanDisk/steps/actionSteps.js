"use strict";
let { When } = require(`cucumber`);
const path = require(`path`);

const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const stepFunctions = require(path.resolve(`./test/SanDisk/steps/stepFunctions.js`));

When(/^I click "([^"]*)"$/, async (alias) => {
  logger.info(`I click ${alias}`);
  return (await stepFunctions.getPageObjectElement(alias)).click();
});

When(/^I click on "([^"]*)" element from "([^"]*)"$/, async (position, alias) => {
  logger.info(`I click on ${position} from ${alias} `);
  return (await stepFunctions.getSomeElementFromArray(position, alias)).click();
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

When(/^I type "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
  logger.info(`I type ${alias}`);
  return (await stepFunctions.getPageObjectElement(alias)).sendKeys(text);
});

When(/^I click text "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click [${text}] text in [${alias}]`);
  const el = await stepFunctions.getElementFromCollectionByText(alias, text);
  return el.click();
});

When(/^I look "([^"]*)" in "([^"]*)"$/, async (text, alias) => {
  logger.info(`I click [${text}] text in [${alias}]`);
  const el = await stepFunctions.getElementByText(alias, text);
  return el.click();
});
