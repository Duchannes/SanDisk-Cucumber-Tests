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

let nestedElement = async (parentJSON, childrenAliases) => {
  let parent = element.all(by.css(parentJSON.selector));
  logger.debug(JSON.stringify(parentJSON.selector));
  let childName = childrenAliases.shift();
  let childJSON = parentJSON.children[childName];
  logger.debug(JSON.stringify(childJSON.selector));
  let child = await parent.all(by.css(childJSON.selector));
  parentJSON = childJSON;
  logger.debug(JSON.stringify(parentJSON));
  if (childrenAliases.length === 0) {
    console.log(Array.isArray(child));
    return child;
  } else {
    nestedElement(parentJSON, childrenAliases);
  }
};
module.exports = {
  getPageObjectElement,
  nestedElement
};
