import { getAllScenes } from "../src/parseFiles";

test("Get all scenes finds enough elements.", () => {
    let allScenes = getAllScenes("./tests/samples/sample-1");
    expect(length(allScenes) === 3)
})