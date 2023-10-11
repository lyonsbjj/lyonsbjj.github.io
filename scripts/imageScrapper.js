const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

function delay(time) {
   return new Promise(function (resolve) {
      setTimeout(resolve, time);
   });
}

class Scrapper {
   constructor() {
      this.startTime = performance.now();
      this.sourcePage = "https://www.facebook.com/LyonsBJJ/photos";
      this.imageSources = [];
      this.outputPath = path.resolve(
         __dirname,
         "../src/constants/imagePaths.ts"
      );
      this.browserConfig = {
         headless: true,
         defaultViewport: null,
         executablePath:
            "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
         userDataDir:
            "C:\\Users\\teakw\\AppData\\Local\\Google\\Chrome\\User Data",
      };
   }

   run = async () => {
      try {
         this.browser = await puppeteer.launch(this.browserConfig);
      } catch (e) {
         console.error(e);
         console.error(
            "\n--------------\n Ensure that chrome browser is closed!\n--------------\n"
         );
      }
      this.page = await this.browser.newPage();
      await this.page.goto(this.sourcePage);
      await delay(1000);
      await this.scrollImagesIntoView();

      const elementHandles = await this.page.$$("a > img");

      let i = 1;
      for (const handle of elementHandles) {
         console.log(`Fetching ${i}/${elementHandles.length}`);
         await (await handle.getProperty("parentNode")).click();
         await this.page.waitForSelector("img[data-visualcompletion]");
         this.imageSources.push(
            await this.page.evaluate(() => {
               const img = document.querySelector("img[data-visualcompletion]");
               return img.src;
            })
         );
         await this.page.goBack();
         i++;
      }

      const fileContent = `
      // This is a generated file.
      // run the scrape-images command to re-generate.

      export const imagePaths = [${this.imageSources
         .filter(
            (i) => !i.includes("static") && !i.includes("data:image/svg+xml")
         )
         .map((i) => `'${i}'`)
         .join(",")}];`;

      fs.writeFile(this.outputPath, fileContent, (error) => {
         if (error) {
            console.error(error);
         }

         console.log("File written!");
      });

      const endTime = performance.now();
      console.log(
         `Total processing time: ${(endTime - this.startTime) / 1000} seconds`
      );

      this.page.close();
      this.browser.close();
      return;
   };

   scrollImagesIntoView = async () => {
      console.log("Scrolling all images into view...");
      let stopElement = undefined;
      while (!stopElement) {
         await this.page.evaluate(() => {
            window.scrollTo(0, window.document.body.scrollHeight);
         });

         try {
            stopElement = await this.page.waitForSelector(
               'a >>> ::-p-text("Videos")',
               { timeout: 1000 }
            );
         } catch {}
      }
   };
}

let scrapper = new Scrapper();
scrapper.run();
