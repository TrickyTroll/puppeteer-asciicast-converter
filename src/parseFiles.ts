// @ts-ignore
import { walk } from "https://deno.land/std@0.99.0/fs/mod.ts";

function getRecordings (projectPath: string) : Array<string> { 
    const allPaths: Array<string> = []
    for await(const file of walk(projectPath,
        {
            maxDepth: 3,
            includeDirs: false,
            exts: ['.json', '.cast']
        })) {
            allPaths.push(file);
        }
    
    return allPaths
}