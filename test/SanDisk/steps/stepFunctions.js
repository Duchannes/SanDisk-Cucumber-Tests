/* eslint-disable no-undef */
const path = require(`path`);
const pageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

let getPageObjectElement = async (alias) => {
  let pageElement = (await pageSelector.getPage())[alias];
  if (pageElement[`isCollection`]) {
    pageElement = element.all(by.css(pageElement.selector));
    return pageElement;
  } else {
    pageElement = element(by.css(pageElement.selector));
    return pageElement;
  }
};

let getNestedElement = async (parentAlias, arrayOfAliases) => {
  let parent = (await pageSelector.getPage())[parentAlias];
  let children = parent.children;
  logger.debug(JSON.stringify(parent));
  logger.debug(JSON.stringify(children));
  parentElement = element.all(by.css(parent.selector));
};
module.exports = {
  getPageObjectElement,
  getNestedElement
};
