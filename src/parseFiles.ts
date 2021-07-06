// @ts-ignore
import fs from 'fs';
import * as path from 'path';

// The name of the directory where the recordings are saved. 
const recordingsDirectory: string = "asciicasts"

export function getAllRecordings(projectPath: string): Array<string> {
  const allPaths: Array<string> = [];
  let scenes: Array<string> = getAllScenes(projectPath);
  scenes.forEach((file) => {
      // For each file contained in a scene:
      let isDir: boolean = fs.lstatSync(file).isDirectory();
      if (file.includes("asciicasts") && isDir) {
          allPaths.concat(getSceneRecordings(file));
      }
  });
  return allPaths
}

/**
 * Checks a recordings directory and returns a list of paths towards
 * each `asciinema` recording it contains.
 * 
 * @param sceneRecDir A path from which recordings should be fetched.
 *   Should be absolute or relative to the project's path.
 * @returns All recordings contained by a certain scene.
 */
export function getSceneRecordings(sceneRecDir: string): Array<string> {
    let sceneRecs: Array<string> = [];
    let files: Array<string> = fs.readdirSync(sceneRecDir);
    files.forEach((file) => {
        if (checkIfRecording(file)) {
            sceneRecs.push(file)
        }
    })

    return sceneRecs
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
export function checkIfRecording(filePath: string): boolean {
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
export function getAllScenes(projectPath: string): Array<string> {
    const allScenes: Array<string> = [];
    let files: Array<string> = fs.readdirSync(projectPath)
    files.forEach((file) => {
        let fullPath: string = projectPath + "/" + file
        let isDir: boolean = fs.lstatSync(fullPath).isDirectory() 
        if (file.includes("scene_") && isDir) {
            allScenes.push(fullPath)
        }
    })
    return allScenes
}
