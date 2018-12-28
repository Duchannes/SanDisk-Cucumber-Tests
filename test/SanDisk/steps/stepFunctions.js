/* eslint-disable no-undef */
const path = require(`path`);
const pageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));

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

let getIncludedPageObjectElement = async (parentObj, parentElements, ...arrayOfChildAlliases) => {
  console.log(`---------------------DEBUG ${Object.keys(parentObj.children)} DEBUG-----------------------`);
  console.log(`---------------------DEBUG ${parentElements} DEBUG-----------------------`);
  console.log(`---------------------DEBUG ${arrayOfChildAlliases} DEBUG-----------------------`);
  if (arrayOfChildAlliases.length > 0) {
    let newParentAllias = await arrayOfChildAlliases.shift();
    console.log(`---------------------NEWALLIAS ${newParentAllias} NEWALLIAS-----------------------`);
    console.log(`---------------------CHILDOBJECT ${Object.entries(parentObj.children[newParentAllias])} CHILDOBJECT-----------------------`);
    let childAliasInJson = await parentObj.children[newParentAllias];
    console.log(`---------------------DEBUG ${childAliasInJson.selector} DEBUG-----------------------`);
    await parentElements.forEach(parentElement => {
      let childrenOfParentElements = parentElement.all(by.css(childAliasInJson.selector));
      console.log(`---------------------DEBUG ${childrenOfParentElements} DEBUG-----------------------`);
      if (childrenOfParentElements.length !== undefined) {
        const finalElement = getIncludedPageObjectElement(childAliasInJson, childrenOfParentElements, arrayOfChildAlliases);
        if (arrayOfChildAlliases.length === 0) {
          console.log(`---------------------RESULT ${parentObj.children.newParentAllias} RESULT-----------------------`);
          return finalElement;
        };
      }
    });
  }
};

module.exports = {
  getPageObjectElement,
  getIncludedPageObjectElement,
  getJsonObj
};
