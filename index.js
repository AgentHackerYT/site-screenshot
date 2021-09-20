const puppeteer = require('puppeteer');
const fs = require('fs');
async function scrap(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
 const a =  await page.screenshot()
  await browser.close();
  const resolvedProm = Promise.resolve(33);

  let thenProm = resolvedProm.then(value => {
      return a;
    
  });
  return thenProm;
}
module.exports = scrap;