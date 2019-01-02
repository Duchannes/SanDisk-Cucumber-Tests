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

let getJsonObj = async (alias) => {
  console.log(alias);
  let pageElement = (await pageSelector.getPage())[alias];
  console.log(pageElement);
  return pageElement;
};

const getIncludedPageObjectElement = async (parentObj, arrayOfAlliases, ...parentElements) => {
  if (arrayOfAlliases.length > 0) {
    let newParentAllias = await arrayOfAlliases.shift();
    let childAliasInJson = await parentObj.children[newParentAllias];
    await parentElements.forEach(parentElement => {
      let childrenOfParentElement = parentElement.all(by.css(childAliasInJson.selector));
      if (typeof childrenOfParentElement === `object`) {
        if (arrayOfAlliases.length === 0) {
          return childrenOfParentElement.click();
        } else {
          const result = getIncludedPageObjectElement(childAliasInJson, arrayOfAlliases, parentElement);
          if (typeof result !== `undefined`) {
            return result;
          }
        }
      }
    });
  }
};

module.exports = {
  getPageObjectElement,
  getIncludedPageObjectElement,
  getJsonObj
};
