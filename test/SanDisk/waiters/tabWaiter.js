/* eslint-disable no-undef */
async function waitCertainTab () {
  return (await browser.getAllWindowHandles()).length.toString() === this.number;
};

async function waitNextTab () {
  const currTab = await browser.getWindowHandle();
  const allTabs = await browser.getAllWindowHandles();
  const currTabIndex = allTabs.indexOf(currTab);
  return (await browser.getAllWindowHandles())[currTabIndex + 1];
};

async function waitPrevTab () {
  const currTab = await browser.getWindowHandle();
  const allTabs = await browser.getAllWindowHandles();
  const currTabIndex = allTabs.indexOf(currTab);
  return (await browser.getAllWindowHandles())[currTabIndex - 1];
};

module.exports = {
  waitCertainTab,
  waitNextTab,
  waitPrevTab
};
