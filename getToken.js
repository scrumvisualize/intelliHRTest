const puppeteer = require("puppeteer");
const fs = require("fs");

puppeteer
  .launch({ headless: true, chromeWebSecurity: false, args: ['--no-sandbox'] })
  .then(async browser => {
    const page = await browser.newPage();
    await page.goto("https://vinod-demo.intellihrdev.net/auth/login");

    await page.waitFor(2000);
    await page.waitForSelector("input[name=username]");
    await page.type("input[name=username]", "vinod.mathew", {
      delay: 50
    });

    await page.waitFor(2000);
    await page.waitForSelector("input[name=password]");
    await page.click("input[name=password]");

    await page.waitFor(2000);
    await page.type("input[name=password]", "Test1234!", {
      delay: 50
    });

    await page.waitForSelector("button[type=submit]");
    await page.click("button[type=submit]");
   
    // TODO: Investigate if this is actually still required...
    await delay(5000);

    let aadValues = await page.evaluate(() => {
      let values = {};
      for (var i = 0, len = localStorage.length; i < len; ++i) {
        values[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
      }

      for (i = 0; i < sessionStorage.length; i++) {
      //console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
      values[sessionStorage.key(i)] = sessionStorage.getItem(sessionStorage.key(i));
      }

      return values;
    });

    fs.writeFileSync(
      "tokenData.json",
      JSON.stringify(aadValues)
    );
    browser.close();
  });

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}