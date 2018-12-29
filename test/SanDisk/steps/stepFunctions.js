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

let nestedElement = async (parentAlias, childrenAliases, chain) => {
  let parent = (await pageSelector.getPage())[parentAlias];
  logger.debug(childrenAliases);
  childrenAliases.forEach(element => {
    if (parent.children) {
      let names = [];
      parent = parent.children[element];
      names.push(parent.selector);
      logger.debug(parent.selector);
      childrenAliases.shift();
      names.push(parent.selector);
      logger.debug(names);
      return nestedElement(parent, childrenAliases, names.join(` > `));
    }
  });
  if (childrenAliases.length === 0) {
    logger.debug(names);
    let elem = element.all(by.css(chain));
    return elem.click();
  }
};
module.exports = {
  getPageObjectElement,
  nestedElement
};
