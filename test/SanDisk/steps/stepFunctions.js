/* eslint-disable no-undef */
const path = require(`path`);
const EC = protractor.ExpectedConditions;
const pageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;
const tabWaiter = require(path.resolve(`./test/SanDisk/waiters/tabWaiter.js`));

let getPageObjectElement = async (alias) => {
  let pageElement = (await pageSelector.getPage())[alias];
  if (alias.includes(`>`)) {
    const elements = alias.split(` > `);
    const firstPO = (await pageSelector.getPage())[elements.shift()];
    const firstElement = await getElement(firstPO);
    return getNestedElement(firstPO, firstElement, elements);
  } else {
    return getElement(pageElement);
  }
};

let getElement = async (pageElement) => {
  if (pageElement[`isCollection`]) {
    pageElement = await $$(pageElement.selector);
    return pageElement;
  } else {
    pageElement = await $(pageElement.selector);
    return pageElement;
  }
};

let getSomeElementFromArray = async (position, alias) => {
  let element;
  const elements = await getPageObjectElement(alias);
  if (isNaN(position)) {
    switch (position) {
      case `any`:
        logger.debug(elements.length + ` Elements`);
        const index = Math.floor(Math.random() * elements.length);
        element = elements[index];
        break;
      default:
        logger.error(`Wrong element position: [${number}]`);
        throw new Error(`Wrong element position.`);
    }
  } else {
    element = elements[position];
  }
  return element;
};

let getNestedElement = async (parentPO, currElement, nestedPO) => {
  if (nestedPO.length === 0) {
    return currElement;
  } else {
    let result = [];
    let currPageElement = parentPO.children[nestedPO.shift()];
    if (!Array.isArray(currElement)) {
      if (currPageElement[`isCollection`]) {
        result = await currElement.$$(currPageElement.selector);
      } else {
        result = await currElement.$(currPageElement.selector);
      }
      return getNestedElement(currPageElement, result, nestedPO);
    } else {
      for (let i = 0; i < currElement.length; i++) {
        if (currPageElement[`isCollection`]) {
          result.concat(await currElement[i].$$(currPageElement.selector));
        } else {
          result.push(await currElement[i].$(currPageElement.selector));
        }
      };
      return getNestedElement(currPageElement, result, nestedPO);
    }
  }
};

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
        expectedConditionFunction = tabWaiter.waitForPrevTab.bind();
        break;
      case `next`:
        expectedConditionFunction = tabWaiter.waitForNextTab.bind();
        break;
      default:
        logger.error(`Wrong tab position provided: [${number}]`);
        throw new Error(`Wrong tab position provided.`);
    }
  } else {
    expectedConditionFunction = tabWaiter.waitForCertainTab.bind({ "number": number });
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
  logger.debug(items.length);
  for (let i = 0; i < items.length; i++) {
    const itemText = await (items[i]).getText();
    logger.debug(itemText + ` - Inner Element text (getElementFromCollectionByText)`);
    if (itemText.includes(text)) {
      return items[i];
    }
  }
  throw new Error(`No element with text [${text}] in [${alias}]!`);
};

let getElementByText = async (alias, text) => {
  const titleSelector = (await pageSelector.getPage())[alias].children[`Title`].selector;
  const buttonSelector = (await pageSelector.getPage())[alias].children[`Button`].selector;
  const elements = await getPageObjectElement(alias);
  for (let i = 0; i < elements.length; i++) {
    if (await elements[i].$(titleSelector).getText() === text) {
      return elements[i].$(buttonSelector);
    }
  }
};

module.exports = {
  expectedCondition,
  getPageObjectElement,
  tabCondition,
  getTab,
  getElementFromCollectionByText,
  getSomeElementFromArray,
  getElementByText
};
