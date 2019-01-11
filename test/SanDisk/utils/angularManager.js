/* eslint-disable no-undef */
const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

let isAngular = async () => {
  let isAngular = browser.executeScript(`return window.angular`);
  if (isAngular) {
    logger.debug(`waitForAngularEnabled = true`);
    return true;
  } else {
    logger.debug(`waitForAngularEnabled = false`);
    return false;
  }
};

module.exports = {
  isAngular
};
