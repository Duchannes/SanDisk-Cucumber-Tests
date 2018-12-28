const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

// Enum including all Page Objects and page symptomes
const PagesEnum = {
  "MAIN": {
    po: require(path.resolve(`./test/SanDisk/pages/mainPage.json`)),
    symptomes: [/^https:\/\/www\.sandisk\.com\/$/]
  },
  "CHECKOUT": {
    po: require(path.resolve(`./test/SanDisk/pages/checkoutPage.json`)),
    symptomes: [/\/store\/sdiskus\/en_US\/DisplayThreePgCheckoutAddressPaymentInfoPage\//]
  },
  "PRODUCTS": {
    po: require(path.resolve(`./test/SanDisk/pages/productsPage.json`)),
    symptomes: [/\/store\/sdiskus\/en_US\/list\/categoryID/]
  },
  "PRODUCT": {
    po: require(path.resolve(`./test/SanDisk/pages/productPage.json`)),
    symptomes: [/\/store\/sdiskus\/en_US\/pd\/productID/]
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
    symptomes: [/\/home\/usb-flash\/$/]
  },
  "USBFLASHPRODUCT": {
    po: require(path.resolve(`./test/SanDisk/pages/usbFlashProductPage.json`)),
    symptomes: [/\/home\/usb-flash\/(?!$)/]
  }
};

function choosePage (currUrl) {
  for (const key in PagesEnum) { // Check every ENUM page
    for (let i = 0; i < PagesEnum[key].symptomes.length; i++) {
      if (currUrl.search(PagesEnum[key].symptomes[i]) >= 0) {
        logger.debug(`PageObject - ${key}`);
        return key;
      }
    };
  }
}

async function getPage () {
  // eslint-disable-next-line no-undef
  const currUrl = await browser.getCurrentUrl();
  const currPage = choosePage(currUrl);
  return PagesEnum[currPage].po;
}

module.exports = {
  getPage
};
