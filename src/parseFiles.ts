// @ts-ignore
import fs from 'fs';
import * as path from 'path';

function getRecordings(projectPath: string): Array<string> {
  const allPaths: Array<string> = [];
  let files: Array<string> = fs.readdirSync(projectPath)
  files.forEach((file) => {
      if (checkIfRecording(file)) {
          allPaths.push(file)
      }
  })
  return allPaths
}

function checkIfRecording(filePath: string): boolean {
    console
    if (path.extname(filePath) === ".json" && path.dirname(filePath) === "asciicasts") {
        return true
    }
    return false
}

export { getRecordings }