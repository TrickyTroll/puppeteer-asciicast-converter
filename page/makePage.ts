// @ts-ignore
import { html } from "https://deno.land/x/html/mod.ts";

async function writeFile (asciicast: string, dirPath: string) : Promise<string> {
  const str = html`
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="utf-8">
          <link href="./asciinema-player.css" rel="stylesheet" type="text/css">
      </head>
      <div id="player"></div>
      <script src="./asciinema-player.js" type="text/javascript"></script>
  </html>
  `;
  let htmlPath = await Deno.makeTempFile({ dir: dirPath })
  await Deno.writeTextFile(htmlPath, str)

  return htmlPath
}