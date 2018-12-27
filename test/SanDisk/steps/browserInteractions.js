/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use strict";
let { Then, When, Given } = require(`cucumber`);

const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

When(/^I open "([^"]*)" url$/, (url) => {
  logger.info(`I open ${url} url`);
  return browser.get(url);
});
