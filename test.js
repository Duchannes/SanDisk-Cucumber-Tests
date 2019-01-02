const shopPage = require(`./test/SanDisk/pages/shopPage.json`);
let sh = shopPage[`Type of Products`];
if (sh[`isCollection`]) {
  console.log(`yes`);
}
