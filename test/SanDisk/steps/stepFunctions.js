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

// const getIncludedPageObjectElement = async (parentObj, arrayOfChildAlliases, ...parentElements) => {
//   let result;
//   let parentAlliasInJson = await arrayOfChildAlliases.shift();
//   let childObj = await parentObj.children[parentAlliasInJson];
//   await parentElements.forEach(parentElement => {
//     result = parentElement.all(by.css(childObj.selector)).then(childrenOfParentElement => {
//       if (arrayOfChildAlliases.length === 0) {
//         console.log(`FOUND---|${childrenOfParentElement}|---FOUND`);
//         console.log(`FOUND---|${Array.isArray(childrenOfParentElement)}|---FOUND`);
//         return childrenOfParentElement;
//       } else {
//         result = getIncludedPageObjectElement(childObj, arrayOfChildAlliases, parentElement);
//         console.log(`RECURSIVELY FOUND---|${result}|---RECURSIVELY FOUND`);
//         console.log(`RECURSIVELY FOUND---|${Array.isArray(result)}|---RECURSIVELY FOUND`);
//         return result.click();
//       }
//     });
//   });
//   return result.click();
// };

const getIncludedPageObjectElement = async (parentObj, arrayOfAlliases, ...parentElements) => {
  console.log(`INCOMING OBJECT --------------------|${Object.keys(parentObj)}`);
  console.log(`INCOMING ALLIAS ARRAY LENGTH--------------------|${arrayOfAlliases.length}`);
  console.log(`INCOMING PARENT LENGTH --------------------|${parentElements.length}`);
  let elToClick;
  let newParentAllias = await arrayOfAlliases.shift();
  let childAliasInJson = await parentObj.children[newParentAllias];
  console.log(`AMMOUNT OF PARENTS FOR THIS ITERATION --------------------|${parentElements.length}`);
  const result = await parentElements.find(parentElement => {
    parentElement.all(by.css(childAliasInJson.selector)).then(childrenOfParentElement => {
      console.log(`ACTUAL LENGTH OF FOUND CHILDREN --------------------|${childrenOfParentElement.length}`)
      console.log(`AND NOW LENGTH IS --------------------|${childrenOfParentElement.length}`)
      console.log(`THAT ARE FOUND BY SELECTOR --------------------|${childAliasInJson.selector}`);
      console.log(`AND NOW TYPE IS --------------------|${typeof childrenOfParentElement}`);
      if (typeof childrenOfParentElement !== `undefined`) {
        if (arrayOfAlliases.length === 0) {
          console.log(`FINAL RESULT --------------------|${childrenOfParentElement}`);
          elToClick = childrenOfParentElement;
        } else {
          const resultFromRecursion = getIncludedPageObjectElement(childAliasInJson, arrayOfAlliases, ...childrenOfParentElement);
          console.log(`RESULT FROM RECURSION --------------------|${result}`);
          elToClick = resultFromRecursion;
        }
      }
    });
  });
  return elToClick.click();
};

module.exports = {
  getPageObjectElement,
  getIncludedPageObjectElement,
  getJsonObj
};
