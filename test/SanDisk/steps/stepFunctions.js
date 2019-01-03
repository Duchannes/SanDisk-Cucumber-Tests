/* eslint-disable no-undef */
const path = require(`path`);
const EC = protractor.ExpectedConditions;

const pageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
<<<<<<< HEAD
=======
const tabWaiter = require(path.resolve(`./test/SanDisk/waiters/tabWaiter.js`));
>>>>>>> be9f501848fb7bd3ebfd398ad35627eaf7499004

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

<<<<<<< HEAD
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
=======
let expectedCondition = (shouldBe) => {
  let expectedConditionFunction;
  switch (shouldBe) {
    case `present`:
      expectedConditionFunction = EC.presenceOf.bind(EC);
      break;
    case `clickable`:
      expectedConditionFunction = EC.elementToBeClickable.bind(EC);
      break;
    case `visible`:
      expectedConditionFunction = EC.visibilityOf.bind(EC);
      break;
    case `invisible`:
      expectedConditionFunction = EC.invisibilityOf.bind(EC);
      break;
    case `selected`:
      expectedConditionFunction = EC.elementToBeSelected.bind(EC);
      break;
    case `gone`:
      expectedConditionFunction = EC.stalenessOf.bind(EC);
      break;
    default:
      logger.error(`Wrong expected condition provided: [${shouldBe}]`);
      throw new Error(`Wrong expected condition provided.`);
  }
  return expectedConditionFunction;
};

let tabCondition = (number) => {
  let expectedConditionFunction;
  if (isNaN(number)) {
    switch (number) {
      case `previous`:
        expectedConditionFunction = tabWaiter.waitPrevTab.bind();
        break;
      case `next`:
        expectedConditionFunction = tabWaiter.waitNextTab.bind();
        break;
      default:
        logger.error(`Wrong tab position provided: [${number}]`);
        throw new Error(`Wrong tab position provided.`);
    }
  } else {
    expectedConditionFunction = tabWaiter.waitCertainTab.bind({ "number": number });
  }
  return expectedConditionFunction;
};

let getTab = async (number) => {
  let tab;
  if (isNaN(number)) {
    const currTab = await browser.getWindowHandle();
    const allTabs = await browser.getAllWindowHandles();
    const currTabIndex = allTabs.indexOf(currTab);
    switch (number) {
      case `previous`:
        tab = (await browser.getAllWindowHandles())[currTabIndex - 1];
        break;
      case `next`:
        tab = (await browser.getAllWindowHandles())[currTabIndex + 1];
        break;
      default:
        logger.error(`Wrong tab position provided: [${number}]`);
        throw new Error(`Wrong tab position provided.`);
    }
  } else {
    tab = (await browser.getAllWindowHandles())[number];
  }
  return tab;
};

let getElementFromCollectionByText = async (alias, text) => {
  const itemsLocator = (await pageSelector.getPage())[alias].items;
  const element = await getPageObjectElement(alias);
  const items = await element.$$(itemsLocator);
  for (let i = 0; i < items.length; i++) {
    const itemText = await items[i].getText();
    if (text === itemText) {
      return items[i];
    }
  }
  throw new Error(`No element with text [${text}] in [${alias}]!`);
};

module.exports = {
  expectedCondition,
  getPageObjectElement,
  tabCondition,
  getTab,
  getElementFromCollectionByText
>>>>>>> be9f501848fb7bd3ebfd398ad35627eaf7499004
};
