const path = require(`path`);
const logger = require(path.resolve(`./test/SanDisk/config/loggerConfig.js`)).logger;

// Enum including all Page Objects and page symptomes
const PagesEnum = {
  "MAIN": {
    po: require(path.resolve(`./test/SanDisk/pages/mainPage.json`)),
    symptomes: [/^https:\/\/www.sandisk.com$/]
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
    symptomes: [/\/store\?Action=DisplayHomePage/, /\/store\/sdiskus\/home$/]
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
    symptomes: [/\/home\/usb-flash\//]
  }
};

function choosePage () {
  for (const key in PagesEnum) { // Check every ENUM page
    PagesEnum[key].symptomes.forEach(simptome => { // For each symptome
      if (this.currUrl.search(simptome) >= 0) {
        if (this.currPage !== key) { // Is page changed?
          logger.debug(`PageObject changed to - ${key}`);
          this.currPage = key; // Change page
        }
      }
    });
    break;
  }
}

export class PageSelector {
  constructor () {
    this.currUrl = null;
    this.currPage = null;
  }

  getPage () {
    // eslint-disable-next-line no-undef
    const currUrl = browser.getCurrentUrl();
    if (this.currUrl !== currUrl) {
      this.currUrl = currUrl;
      choosePage.bind(this)();
      return PagesEnum[this.currPage].po;
    }
  }
}
