/* eslint-disable no-undef */
const path = require(`path`);
const PageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));

let getPageObjectElement = async (alias) => {
  const pageSelector = new PageSelector();
  let pageElement = (await pageSelector.getPage())[alias];
  if (pageElement[`isCollection`]) {
    pageElement = element.all(by.css(pageElement.selector));
    return pageElement;
  } else {
    pageElement = element(by.css(pageElement.selector));
    return pageElement;
  }
};

module.exports = {
  getPageObjectElement
};
