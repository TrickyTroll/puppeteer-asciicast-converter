// @ts-ignore
import puppeteer from "puppeteer";

async function convertRecording(
  jsonPath: string,
  savePath: string,
  pagePath: string
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(pagePath);
}

function greet() {
  console.log("Hello, world!");
}

export { greet };
