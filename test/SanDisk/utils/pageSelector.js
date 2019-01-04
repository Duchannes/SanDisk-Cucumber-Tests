/* eslint-disable no-undef */
const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

const PagesEnum = {
  "MAIN": {
    po: require(path.resolve(`./test/SanDisk/pages/mainPage.json`)),
    symptomes: [/^https:\/\/www\.sandisk\.com\/$/, /home\/extreme-team$/]
  },
  "CHECKOUT": {
    po: require(path.resolve(`./test/SanDisk/pages/checkoutPage.json`)),
    symptomes: [/\/store\/sdiskus\/en_US\/DisplayThreePgCheckoutAddressPaymentInfoPage\//]
  },
  "PRODUCTS": {
    po: require(path.resolve(`./test/SanDisk/pages/productsPage.json`)),
    symptomes: [/\/store\/sdiskus\/en_US\/list\/categoryID/, /\/store\/sdiskus\/en_US\/ContinueShopping\//]
  },
  "PRODUCT": {
    po: require(path.resolve(`./test/SanDisk/pages/productPage.json`)),
    symptomes: [/\/store\/sdiskus\/pd\/productID/, /shop\.sandisk\.com\/store\?Action=pd&Locale=en_US/]
  },
  "SHOP": {
    po: require(path.resolve(`./test/SanDisk/pages/shopPage.json`)),
    symptomes: [/\/store\?Action=DisplayHomePage/, /\/store\/sdiskus\/home\/$/]
  },
  "SHOPPINGCART": {
    po: require(path.resolve(`./test/SanDisk/pages/shoppingCartPage.json`)),
    symptomes: [/\/store\?Action=DisplayPage/]
  },
  "USBFLASH": {
    po: require(path.resolve(`./test/SanDisk/pages/usbFlashPage.json`)),
    symptomes: [/\/home\/usb-flash$/]
  },
  "USBFLASHPRODUCT": {
    po: require(path.resolve(`./test/SanDisk/pages/usbFlashProductPage.json`)),
    symptomes: [/\/home\/usb-flash\/(?!$)/]
  },
  "WHERETOBY": {
    po: require(path.resolve(`./test/SanDisk/pages/whereToBuyPage.json`)),
    symptomes: [/\/about\/where-to-buy$/]
  },
  "PRODUCTCOMPATIBILITTOOL": {
    po: require(path.resolve(`./test/SanDisk/pages/productCompatibilityTool.json`)),
    symptomes: [/^https:\/\/pct1\.sandisk\.com\/NewSearch.aspx\?$/]
  }
};

async function getPage () {
  const currUrl = await browser.getCurrentUrl();
  logger.debug(`currurl - ${currUrl}`);
  for (const key in PagesEnum) { // Check every ENUM page
    for (let i = 0; i < PagesEnum[key].symptomes.length; i++) {
      if (currUrl.search(PagesEnum[key].symptomes[i]) >= 0) {
        logger.debug(`PageObject - ${key}`);
        return PagesEnum[key].po;
      }
    };
  }
}

module.exports = {
  getPage
};
