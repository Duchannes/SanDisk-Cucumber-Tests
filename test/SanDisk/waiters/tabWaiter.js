/* eslint-disable no-undef */
async function waitForCertainTab () {
  return (await browser.getAllWindowHandles()).length.toString() === this.number;
};

async function waitForNextTab () {
  const currTab = await browser.getWindowHandle();
  const allTabs = await browser.getAllWindowHandles();
  const currTabIndex = allTabs.indexOf(currTab);
  return (await browser.getAllWindowHandles())[currTabIndex + 1];
};

async function waitForPrevTab () {
  const currTab = await browser.getWindowHandle();
  const allTabs = await browser.getAllWindowHandles();
  const currTabIndex = allTabs.indexOf(currTab);
  return (await browser.getAllWindowHandles())[currTabIndex - 1];
};

module.exports = {
  waitForCertainTab,
  waitForNextTab,
  waitForPrevTab
};
