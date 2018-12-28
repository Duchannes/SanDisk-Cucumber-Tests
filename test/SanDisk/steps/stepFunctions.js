/* eslint-disable no-undef */
const path = require(`path`);
const pageSelector = require(path.resolve(`./test/SanDisk/utils/pageSelector.js`));
const EC = protractor.ExpectedConditions;
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
  return tabWaiter.bind({ "number": number });
};

async function tabWaiter () {
  logger.debug(this.number);
  return (await browser.getAllWindowHandles()).length.toString() === this.number;
};

module.exports = {
  expectedCondition,
  getPageObjectElement,
  tabCondition
};
