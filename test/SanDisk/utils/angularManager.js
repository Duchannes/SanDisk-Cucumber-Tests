/* eslint-disable no-undef */
const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

async function manage () {
  browser.waitForAngularEnabled(false);
  const currUrl = await browser.getCurrentUrl();
  if (currUrl.search(/shop\.sandisk\.com/) >= 0) {
    browser.waitForAngularEnabled(false);
    logger.debug(`waitForAngularEnabled = false`);
  }
  if (currUrl.search(/www\.sandisk\.com/) >= 0) {
    browser.waitForAngularEnabled(true);
    logger.debug(`waitForAngularEnabled = true`);
  }
}

module.exports = {
  manage
};
