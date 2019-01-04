// "CHOOSE MAIN": {
//     "type": "css",
//     "selector": ".product-category.ng-scope",
//     "children": {
//         "USB": {
//             "type": "css",
//             "selector": "[alt = 'USB']",
//             "children" :{
//                 "DO":{
//                     "type": "css",
//                     "selector": "[alt = 'USB']"
//                 }
//             }
//         }
//     }
const mainPage = require(`./test/SanDisk/pages/mainPage.json`);
const a = `CHOOSE MAIN > LI`;

let arrayOfAliases = a.split(` > `);
let parentAlias = arrayOfAliases.shift();
let parent = mainPage[parentAlias];

function getWebElm (parent, arrayOfAliases, chain) {
  if (arrayOfAliases.length === 0) {
    console.log(chain);
  } else {
    arrayOfAliases.forEach(element => {
      if (parent.children) {
        let names = [];
        names.push(parent.selector);
        parent = parent.children[element];
        names.push(parent.selector);
        arrayOfAliases.shift();
        return getWebElm(parent, arrayOfAliases, names.join(` > `));
      }
    });
  }
}
getWebElm(parent, arrayOfAliases);
