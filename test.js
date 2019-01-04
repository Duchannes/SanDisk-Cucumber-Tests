const mainPage = require(`./test/SanDisk/pages/mainPage.json`);
const a = `CHOOSE MAIN > USB >`;

if (a.includes(`>`)) {
  let arrayOfAliases = a.split(` > `);
  let parentAlias = arrayOfAliases.shift();
  let parent = mainPage[parentAlias];
  let parentSelector = mainPage[parentAlias].selector;
  let children = mainPage[parentAlias].children;
  let arr = arrayOfAliases.map(elem => {
    let selector = children[elem].selector;
    return selector;
  });
  arr.unshift(parentSelector);
  let selector = arr.join(` `);
  console.log(selector);
}
