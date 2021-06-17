// @ts-ignore
import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

async function convertRecording(jsonPath: string, savePath: string, pagePath: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pagePath)
    console.log("Hello, world!")
}

function greet() {
    console.log("Hello, world!")
}

export {
    greet
}
