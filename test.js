const a = `dima > sasha > manualtesters`;
const b = `manualtesters`;

async function checkForIncludedElems (alias) {
  if (alias.includes(`>`)) {
    let arrayOfElems = await alias.split(`>`);
    console.log(arrayOfElems);
    const parentElement = await arrayOfElems.shift();
    arrayOfElems = await arrayOfElems.join(`>`);
    console.log(arrayOfElems);
    await checkForIncludedElems(arrayOfElems);
  } else {
    console.log(alias);
  }
}

checkForIncludedElems(b);
