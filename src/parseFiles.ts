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

function checkIfRecording(scenePath: string): boolean {
    if (path.extname(scenePath) === ".cast" && path.dirname(scenePath) === "asciicasts") {
        return true
    }
    return false
}

function getAllScenes(projectPath: string): Array<string> {
    const allScenes: Array<string> = [];
    let files: Array<string> = fs.readdirSync(projectPath)
    files.forEach((file) => {
        let isDir: boolean = fs.lstatSync(file).isDirectory() 
        if (file.includes("scene_") && isDir) {
            allScenes.push(file)
        }
    })
    return allScenes
}

export { getRecordings }