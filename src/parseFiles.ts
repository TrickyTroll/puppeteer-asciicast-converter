// @ts-ignore
import fs from 'fs';
import * as path from 'path';

// The name of the directory where the recordings are saved. 
const recordingsDirectory: string = "asciicasts"

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

/**
 * 
 * @param filePath The path towards the file that will be checked.
 *   The path can be relative, and should be provided by the
 *   `getSceneRecordings()` function.
 * @returns Whether or not the file is a recordings. To qualify as
 *   a recording, a file must have the `.cast` extension and be in
 *   the `recordingsDirectory`.
 */
function checkIfRecording(filePath: string): boolean {
    if (path.extname(filePath) === ".cast" && path.dirname(filePath) === recordingsDirectory) {
        return true
    }
    return false
}

/**
 * Get all scenes from a certain project. A scene is a directory at the
 * root of the project path that contains `scene_` in its name.
 * 
 * @param projectPath The path towards the project from which the scenes
 *   will be fetched.
 * @returns A list of directories that contain `scene_` in their name. I
 *   assume that this is enough checks to determine if something is a
 *   scene for now.
 */
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