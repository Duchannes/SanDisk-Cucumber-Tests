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

let getIncludedPageObjectElement = async (parentObj, arrayOfChildAlliases, ...parentElements) => {
  // console.log(`---------------------DEBUG ${parentObj} DEBUG-----------------------`);
  // console.log(`---------------------DEBUG ${parentElements.length} DEBUG-----------------------`);
  // console.log(`---------------------DEBUG ${arrayOfChildAlliases.length} DEBUG-----------------------`);
  if (arrayOfChildAlliases.length > 0) {
    let newParentAllias = await arrayOfChildAlliases.shift();
    // console.log(`---------------------NEWALLIAS ${newParentAllias} NEWALLIAS-----------------------`);
    // console.log(`---------------------CHILDOBJECT ${Object.entries(parentObj.children[newParentAllias])} CHILDOBJECT-----------------------`);
    let childAliasInJson = await parentObj.children[newParentAllias];
    console.log(`---------------------DEBUG ${childAliasInJson.selector} DEBUG-----------------------`);
    await parentElements.forEach(parentElement => {
      // console.log(`---------------------DEBUG ${parentElement} DEBUG-----------------------`);
      let childrenOfParentElement = parentElement.all(by.css(childAliasInJson.selector));
      // console.log(`---------------------DEBUG ${childrenOfParentElements} DEBUG-----------------------`);
      if (typeof childrenOfParentElement === `object`) {
        if (arrayOfChildAlliases.length === 0) {
          // logger.debug(`---------------------RESULT ${childrenOfParentElements} RESULT-----------------------`);
          return childrenOfParentElement.click();
        } else {
          const result = getIncludedPageObjectElement(childAliasInJson, arrayOfChildAlliases, parentElement);
          if (typeof result === `object`) {
            return result.click();
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
